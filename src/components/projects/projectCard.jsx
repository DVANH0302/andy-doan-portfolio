import React from "react";
import "./styles/projectCard.css";

const ProjectCard = ({ project, onClick, isSelected }) => {
	const onKeyDown = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			onClick?.();
		}
	};
	const className = `project-card${isSelected ? " selected" : ""}`;
	return (
		<div
			className={className}
			onClick={onClick}
			onKeyDown={onKeyDown}
			tabIndex={0}
			role="button"
			aria-pressed={!!isSelected}
			aria-label={`${isSelected ? "Selected: " : "Open "}${project.title} details`}
		>
			<img src={project.logo} alt={project.title} className="project-card-logo" />
			<div className="project-card-title">{project.title}</div>
			<div className="project-card-description" dangerouslySetInnerHTML={{ __html: project.description }} />
		</div>
	);
};

export default ProjectCard;
