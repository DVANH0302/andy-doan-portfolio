import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { FaJava, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { SiSpringboot } from "react-icons/si";
import { FaHtml5, FaAws, FaGitAlt, FaDocker } from "react-icons/fa";

import {
	SiJavascript,
	SiCplusplus,
	SiMongodb,
	SiTypescript,
	SiExpress,
	SiFastapi,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { DiRedis } from "react-icons/di";

const SkillChart = ({ data, title, color }) => {
	// Map skill names to icons
	const iconMap = {
		Java: FaJava,
		Python: FaPython,
		JavaScript: SiJavascript,
		React: FaReact,
		"Node.js": FaNodeJs,
		"C++": SiCplusplus,
		MongoDB: SiMongodb,
		TypeScript: SiTypescript,
		Tailwind: RiTailwindCssFill,
		"React.js": GrReactjs,
		SpringBoot: SiSpringboot,
		ExpressJs: SiExpress,
		FastAPI: SiFastapi,
		"HTML/CSS": FaHtml5,
		PostgresSQL: BiLogoPostgresql,
		MySQL: TbBrandMysql,
		Redis: DiRedis,
		AWS: FaAws,
		Git: FaGitAlt,
		Docker: FaDocker,
	};

	return (
		<div style={{ width: 350, height: 350, margin: "0 0px" }}>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart data={data} outerRadius="60%">
					<PolarGrid />
					<PolarAngleAxis
						dataKey="skill"
						tick={(props) => {
							const { x, y, payload, cx, cy } = props;
							const Icon = iconMap[payload.value];

							// Calculate angle and distance from center
							const angle = Math.atan2(y - cy, x - cx);
							const distance = 25; // Distance to push text away from chart

							// Calculate new position
							const newX = x + Math.cos(angle) * distance;
							const newY = y + Math.sin(angle) * distance;

							return (
								<g>
									{Icon && (
										<foreignObject
											x={newX - 12}
											y={newY - 30}
											width={24}
											height={24}
										>
											<div
												style={{
													display: "flex",
													justifyContent: "center",
												}}
											>
												<Icon size={20} color="#666" />
											</div>
										</foreignObject>
									)}
									<text
										x={newX}
										y={newY}
										textAnchor="middle"
										fill="#666"
										fontSize={12}
									>
										{payload.value}
									</text>
								</g>
							);
						}}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: "#fff",
							border: "1px solid #ccc",
						}}
						itemStyle={{ color: "#000" }}
					/>
					<Radar
						name="My Skills"
						dataKey="level"
						stroke={color}
						fill={color}
						fillOpacity={0.8}
					/>
				</RadarChart>
			</ResponsiveContainer>
			<div
				style={{
					fontWeight: "bold",
					fontSize: "16px",
					textAlign: "center",
				}}
			>
				{title}
			</div>
		</div>
	);
};

export default SkillChart;
