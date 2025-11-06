import React, { useEffect, useRef, useState } from "react";
import "./styles/projectInlineDetails.css";

const ProjectInlineDetails = ({ project }) => {
	const [zoomSrc, setZoomSrc] = useState(null);
	const blogRef = useRef(null);

	useEffect(() => {
		const root = blogRef.current;
		if (!root) return;
		const images = root.querySelectorAll(".inline-gallery img");
		const onImgClick = (e) => {
			setZoomSrc(e.currentTarget.src);
		};
		images.forEach((img) => img.addEventListener("click", onImgClick));
		return () => images.forEach((img) => img.removeEventListener("click", onImgClick));
	}, [project]);

	useEffect(() => {
		if (!zoomSrc) return;
		const onKey = (e) => { if (e.key === "Escape") setZoomSrc(null); };
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [zoomSrc]);

	if (!project) return null;
	return (
		<div className="inline-details" role="region" aria-label={`${project.title} details`}>
			<div className="inline-details-header">
				<div className="inline-details-header-left">
					<img src={project.logo} alt={project.title} className="inline-details-logo" />
					<h2 className="inline-details-title">{project.title}</h2>
				</div>
				{project.link && (
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-details-header-link"
					>
						{project.linkText || "View Project"}
					</a>
				)}
			</div>

			{/* Optional blog-style content */}
			{project.blogDemo && (
				<div ref={blogRef} className="inline-details-blog" dangerouslySetInnerHTML={{ __html: project.blogDemo }} />
			)}

			<div className="inline-details-description" dangerouslySetInnerHTML={{ __html: project.description }} />
			{project.link && (
				<a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-details-demo-link">{project.linkText || "View Demo"}</a>
			)}

			{zoomSrc && (
				<div className="inline-zoom-overlay" role="dialog" aria-modal="true" onClick={() => setZoomSrc(null)}>
					<img src={zoomSrc} alt="Zoomed" className="inline-zoom-image" />
				</div>
			)}
		</div>
	);
};

export default ProjectInlineDetails;
