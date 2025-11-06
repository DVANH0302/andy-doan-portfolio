import React from "react";
import "./styles/projectModal.css";

const ProjectModal = ({ project, onClose }) => {
	if (!project) return null;
	return (
		<div className="project-modal-overlay" onClick={onClose}>
			<div className="project-modal" onClick={e => e.stopPropagation()}>
				<button className="project-modal-close" onClick={onClose}>×</button>
				<img src={project.logo} alt={project.title} className="project-modal-logo" />
				<h2 className="project-modal-title">{project.title}</h2>
				{/* Blog-style demo content */}
				{project.blogDemo && (
					<div className="project-modal-blog-demo" style={{marginBottom: 24}} dangerouslySetInnerHTML={{ __html: project.blogDemo }} />
				)}
				<div className="project-modal-description" dangerouslySetInnerHTML={{ __html: project.description }} />
				{project.link && (
					<a href={project.link} target="_blank" rel="noopener noreferrer" className="project-modal-demo-link">{project.linkText || "View Demo"}</a>
				)}
			</div>
		</div>
	);
};

export default ProjectModal;
