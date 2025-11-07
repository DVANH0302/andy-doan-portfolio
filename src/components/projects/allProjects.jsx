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
	const [scrollIndex, setScrollIndex] = useState(0); // Track which card is in view
	const detailsRef = useRef(null);
	const scrollContainerRef = useRef(null);

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

	// Track scroll position for mobile dot indicators
	useEffect(() => {
		if (columns === 2 && scrollContainerRef.current) {
			const handleScroll = () => {
				const container = scrollContainerRef.current;
				const scrollLeft = container.scrollLeft;
				const cardWidth = container.querySelector('.all-projects-project')?.offsetWidth || 0;
				const gap = 16; // Match the gap in CSS
				const newIndex = Math.round(scrollLeft / (cardWidth + gap));
				setScrollIndex(newIndex);
			};

			const container = scrollContainerRef.current;
			container.addEventListener('scroll', handleScroll);
			return () => container.removeEventListener('scroll', handleScroll);
		}
	}, [columns]);

	const handleCardClick = (index) => {
		if (index !== selectedIndex) {
			setSelectedIndex(index);
			// update URL with chosen project slug
			navigate({ pathname: location.pathname, search: `?project=${slugs[index]}` }, { replace: false });
		}

		// On mobile, scroll the card into view
		if (columns === 2 && scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const cards = container.querySelectorAll('.all-projects-project');
			if (cards[index]) {
				cards[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
			}
		} else {
			// Desktop: small nudge scroll to hint new details
			window.requestAnimationFrame(() => {
				window.scrollBy({ top: 100, left: 0, behavior: "smooth" });
			});
		}
	};

	const handleDotClick = (index) => {
		setSelectedIndex(index);
		navigate({ pathname: location.pathname, search: `?project=${slugs[index]}` }, { replace: false });

		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const cards = container.querySelectorAll('.all-projects-project');
			if (cards[index]) {
				cards[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
			}
		}
	};

	const rowOfSelected = useMemo(() => (selectedIndex === null ? null : Math.floor(selectedIndex / columns)), [selectedIndex, columns]);

	// For mobile (2 columns), render details at the bottom
	// For desktop (3 columns), render details inline after each row
	const isMobile = columns === 2;

	return (
		<>
			<div
				className={`all-projects-container ${isMobile ? 'mobile-scroll' : ''}`}
				ref={isMobile ? scrollContainerRef : null}
			>
				{INFO.projects.map((project, index) => {
					const isRowEnd = (index % columns) === columns - 1 || index === INFO.projects.length - 1;
					const rowOfIndex = Math.floor(index / columns);
					const shouldRenderDetailsAfter = !isMobile && isRowEnd && rowOfSelected !== null && rowOfIndex === rowOfSelected;

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

			{/* Dot indicators for mobile */}
			{isMobile && INFO.projects.length > 1 && (
				<div className="scroll-indicators">
					{INFO.projects.map((_, index) => (
						<button
							key={index}
							className={`scroll-dot ${scrollIndex === index ? 'active' : ''}`}
							onClick={() => handleDotClick(index)}
							aria-label={`Go to project ${index + 1}`}
						/>
					))}
				</div>
			)}

			{/* On mobile, render details below all cards */}
			{isMobile && selectedIndex !== null && (
				<div className="all-projects-details mobile-details" ref={detailsRef}>
					<InlineProjectDetails project={INFO.projects[selectedIndex]} />
				</div>
			)}
		</>
	);
};

export default AllProjects;