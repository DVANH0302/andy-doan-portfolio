import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experience.css";

const Experience = () => {
	const timelineRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		// Reveal timeline items on scroll using IntersectionObserver
		const el = timelineRef.current;
		if (!el) return;

		const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReduced) return; // respect user preference

		const items = el.querySelectorAll(".timeline-item");
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						io.unobserve(entry.target);
					}
				});
			},
			{ root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
		);

		items.forEach((it) => io.observe(it));
		return () => io.disconnect();
	}, []);

	const currentSEO = SEO.find((item) => item.page === "experience") || {
		description: "Professional work experience and roles.",
		keywords: ["Work Experience", "Resume", "Career"],
	};

	const workItems = Array.isArray(INFO.experience) ? INFO.experience : [];
	const eduItems = Array.isArray(INFO.education) ? INFO.education : [];

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Work Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="experience-logo-container">
						<div className="experience-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="experience-container" ref={timelineRef}>
						<div className="title experience-title">Work Experience</div>
						<div className="subtitle experience-subtitle">A concise view of my professional roles, responsibilities, and impact.</div>

						<div className="timeline" aria-label="Work experience timeline">
							{workItems.length === 0 ? (
								<div className="experience-empty">I'm compiling my work experience—check back soon.</div>
							) : (
								workItems.map((job, idx) => (
									<div className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`} key={`work-${idx}`}>
										<div className="timeline-dot" aria-hidden="true" />
										<div className="timeline-line" aria-hidden="true" />
										<div className="timeline-content">
											<div className="experience-item-header">
												<div className="experience-role">{job.role}</div>
												<div className="experience-meta">
													<span className="experience-company">{job.company}</span>
													{job.location && <span className="experience-sep">•</span>}
													{job.location && <span className="experience-location">{job.location}</span>}
													{job.period && <span className="experience-sep">•</span>}
													{job.period && <span className="experience-period">{job.period}</span>}
												</div>
											</div>
											{Array.isArray(job.highlights) && job.highlights.length > 0 && (
												<ul className="experience-highlights">
													{job.highlights.map((h, i) => (
														<li key={i}>{h}</li>
													))}
												</ul>
											)}
										</div>
									</div>
								))
							)}
						</div>

						{/* Education timeline */}
						{eduItems.length > 0 && (
							<>
								<div className="title experience-title" style={{ marginTop: 32 }}>Education</div>
								<div className="subtitle experience-subtitle">Degrees and coursework that shaped my engineering foundation.</div>
								<div className="timeline" aria-label="Education timeline">
									{eduItems.map((edu, idx) => (
										<div className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`} key={`edu-${idx}`}>
											<div className="timeline-dot" aria-hidden="true" />
											<div className="timeline-line" aria-hidden="true" />
											<div className="timeline-content">
												<div className="experience-item-header">
													<div className="experience-role">{edu.role}</div>
													<div className="experience-meta">
														<span className="experience-company">{edu.company}</span>
														{edu.location && <span className="experience-sep">•</span>}
														{edu.location && <span className="experience-location">{edu.location}</span>}
														{edu.period && <span className="experience-sep">•</span>}
														{edu.period && <span className="experience-period">{edu.period}</span>}
													</div>
												</div>
												{Array.isArray(edu.highlights) && edu.highlights.length > 0 && (
													<ul className="experience-highlights">
														{edu.highlights.map((h, i) => (
															<li key={i}>{h}</li>
														))}
													</ul>
												)}
											</div>
										</div>
									))}
								</div>
							</>
						)}
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;

