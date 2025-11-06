import React from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const slugify = (str = "") =>
	str
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "")
		.trim()
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");

const HomepageProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => {
				const slug = slugify(project.title);
				return (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={`/projects?project=${slug}`}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default HomepageProjects;
