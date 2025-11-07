import React, { useState, useEffect, useRef } from "react";
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
	const [mobileScroll, setMobileScroll] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const containerRef = useRef(null);

	useEffect(() => {
		const check = () => setMobileScroll(window.innerWidth <= 600);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);

	useEffect(() => {
		if (!mobileScroll) return;
		const el = containerRef.current;
		if (!el) return;

		const onScroll = () => {
			const children = Array.from(el.querySelectorAll('.all-projects-project'));
			if (!children.length) return;
			const center = el.scrollLeft + el.clientWidth / 2;
			let closest = 0;
			let closestDist = Infinity;
			children.forEach((c, i) => {
				const cCenter = c.offsetLeft + c.offsetWidth / 2;
				const dist = Math.abs(cCenter - center);
				if (dist < closestDist) {
					closestDist = dist;
					closest = i;
				}
			});
			setActiveIndex(closest);
		};

		// listen
		el.addEventListener('scroll', onScroll, { passive: true });
		// initial call to set correct dot
		onScroll();

		return () => el.removeEventListener('scroll', onScroll);
	}, [mobileScroll]);

	const scrollToIndex = (i) => {
		const el = containerRef.current;
		if (!el) return;
		const children = Array.from(el.querySelectorAll('.all-projects-project'));
		const target = children[i];
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
			setActiveIndex(i);
		}
	};

	return (
		<>
			<div ref={containerRef} className={`all-projects-container ${mobileScroll ? "mobile-scroll" : ""}`}>
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

			{/* render dot indicators only for mobile-scrolling */}
			{mobileScroll && INFO.projects.length > 1 && (
				<div className="scroll-indicators" role="tablist" aria-label="Project carousel indicators">
					{INFO.projects.map((_, i) => (
						<button
							key={`dot-${i}`}
							className={`scroll-dot ${activeIndex === i ? 'active' : ''}`}
							onClick={() => scrollToIndex(i)}
							aria-label={`View project ${i + 1}`}
							aria-pressed={activeIndex === i}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default HomepageProjects;
