import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";
import SkillChart from "../components/about/SkillChart";
import "./styles/about.css";

const Skill = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "skill");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Skill | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="skill" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className=" about-subtitle">
									{INFO.about.description1}
								</div>
								<div className=" about-subtitle">
									{INFO.about.description4}
								</div>
								<div
									style={{
										display: "flex",
									}}
								>
									<SkillChart
										data={INFO.about.skills.languange}
										title="Language"
									/>
									<SkillChart
										data={INFO.about.skills.frontend}
										title="Frontend"
									/>
								</div>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<SkillChart
										data={INFO.about.skills.backend}
										title="Backend"
									/>
								</div>
								<div
									style={{
										display: "flex",
									}}
								>
									<SkillChart
										data={INFO.about.skills.database}
										title="Database"
									/>
									<SkillChart
										data={INFO.about.skills.devops}
										title="Cloud & DevOps"
									/>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.png"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Skill;
