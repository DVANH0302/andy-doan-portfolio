import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ProjectCard from "./projectCard";
import InlineProjectDetails from "./projectInlineDetails";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const slugify = (str = "") =>
	str
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "")
		.trim()
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");

const AllProjects = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const slugs = useMemo(() => INFO.projects.map((p) => slugify(p.title)), []);

	// Default select the first project (Astro Dreamers) but allow URL to override
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [columns, setColumns] = useState(() => (typeof window !== "undefined" && window.innerWidth <= 600 ? 2 : 3));
	const detailsRef = useRef(null);

	// Keep columns in sync with viewport
	useEffect(() => {
		const updateColumns = () => setColumns(window.innerWidth <= 600 ? 2 : 3);
		updateColumns();
		window.addEventListener("resize", updateColumns);
		return () => window.removeEventListener("resize", updateColumns);
	}, []);

	// On mount and whenever URL changes, sync selected project from ?project=slug
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const slug = params.get("project");
		if (slug) {
			const idx = slugs.indexOf(slug);
			if (idx !== -1 && idx !== selectedIndex) {
				setSelectedIndex(idx);
				return;
			}
		}
		// If no slug present, set default slug in URL (first project) for shareability
		if (!slug) {
			navigate({ pathname: location.pathname, search: `?project=${slugs[0]}` }, { replace: true });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.search, slugs]);

	const handleCardClick = (index) => {
		if (index !== selectedIndex) {
			setSelectedIndex(index);
			// update URL with chosen project slug
			navigate({ pathname: location.pathname, search: `?project=${slugs[index]}` }, { replace: false });
		}
		// small nudge scroll to hint new details (without jumping too far)
		window.requestAnimationFrame(() => {
			window.scrollBy({ top: 100, left: 0, behavior: "smooth" });
		});
	};

	const rowOfSelected = useMemo(() => (selectedIndex === null ? null : Math.floor(selectedIndex / columns)), [selectedIndex, columns]);

	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => {
				const isRowEnd = (index % columns) === columns - 1 || index === INFO.projects.length - 1;
				const rowOfIndex = Math.floor(index / columns);
				const shouldRenderDetailsAfter = isRowEnd && rowOfSelected !== null && rowOfIndex === rowOfSelected;

				return (
					<React.Fragment key={index}>
						<div className="all-projects-project">
							<ProjectCard project={project} onClick={() => handleCardClick(index)} isSelected={selectedIndex === index} />
						</div>
						{shouldRenderDetailsAfter && (
							<div className="all-projects-details" ref={detailsRef}>
								<InlineProjectDetails project={INFO.projects[selectedIndex]} />
							</div>
						)}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default AllProjects;
