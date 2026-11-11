import React from "react";
import {
	FaJava,
	FaPython,
	FaReact,
	FaHtml5,
	FaAws,
	FaGitAlt,
	FaDocker,
	FaSitemap,
	FaCubes,
	FaRandom,
	FaMicrochip,
	FaNetworkWired,
	FaProjectDiagram,
	FaShieldAlt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import {
	SiJavascript,
	SiMongodb,
	SiTypescript,
	SiExpress,
	SiFastapi,
	SiGo,
	SiSpringboot,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { DiRedis } from "react-icons/di";

import "./styles/skillCards.css";

// Map skill name -> brand icon
const ICONS = {
	JavaScript: SiJavascript,
	Python: FaPython,
	TypeScript: SiTypescript,
	Java: FaJava,
	Go: SiGo,
	SpringBoot: SiSpringboot,
	FastAPI: SiFastapi,
	ExpressJs: SiExpress,
	"HTML/CSS": FaHtml5,
	Tailwind: RiTailwindCssFill,
	"React.js": GrReactjs,
	React: FaReact,
	PostgresSQL: BiLogoPostgresql,
	MySQL: TbBrandMysql,
	MongoDB: SiMongodb,
	Redis: DiRedis,
	AWS: FaAws,
	Docker: FaDocker,
	Git: FaGitAlt,
	// Core CS
	DSA: FaSitemap,
	OOP: FaCubes,
	Concurrency: FaRandom,
	OS: FaMicrochip,
	Network: FaNetworkWired,
	"System Design": FaProjectDiagram,
	Security: FaShieldAlt,
};

// Category order + display titles. Accent colors live in CSS (light + dark).
const CATEGORIES = [
	{ key: "corecs", title: "Core CS" },
	{ key: "languange", title: "Languages" },
	{ key: "backend", title: "Backend" },
	{ key: "frontend", title: "Frontend" },
	{ key: "database", title: "Databases" },
	{ key: "devops", title: "Cloud & DevOps" },
];

const SkillCards = ({ skills }) => {
	if (!skills) return null;

	return (
		<div className="skill-cards">
			{CATEGORIES.map(({ key, title }) => {
				const items = Array.isArray(skills[key]) ? skills[key] : [];
				if (items.length === 0) return null;
				// Strongest first — length reads as a ranking down the card
				const sorted = [...items].sort((a, b) => b.level - a.level);

				return (
					<div className={`skill-card skill-card--${key}`} key={key}>
						<div className="skill-card-head">
							<span className="skill-card-title">{title}</span>
							<span className="skill-card-count">{items.length}</span>
						</div>

						<ul className="skill-list">
							{sorted.map(({ skill, level }, i) => {
								const Icon = ICONS[skill];
								return (
									<li
										className="skill-row"
										key={skill}
										style={{ "--delay": `${i * 80}ms` }}
										title={`${skill} — ${level}%`}
									>
										<span className="skill-icon" aria-hidden="true">
											{Icon ? <Icon /> : null}
										</span>
										<span className={`skill-name ${skill.length > 10 ? "skill-name--long" : ""}`}>{skill}</span>
										<span
											className="skill-track"
											role="meter"
											aria-valuenow={level}
											aria-valuemin={0}
											aria-valuemax={100}
											aria-label={skill}
										>
											<span className="skill-fill" style={{ width: `${level}%` }} />
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default SkillCards;
