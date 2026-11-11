import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experience.css";

const Experience = () => {
	const timelineRef = useRef(null);
	const [selectedIndex, setSelectedIndex] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		// Reveal timeline items on scroll using IntersectionObserver
		const el = timelineRef.current;
		if (!el) return;

		const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReduced) return; // respect user preference

		const items = el.querySelectorAll(".experience-timeline-item");
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
	const jobBadgeMap = {
		"Digital Nexus AI": "/digitalnexusai.png",
		VPBank: "/vpbank.png",
	};
	const eduBadgeMap = {
		"University of Sydney": "/usyd.png",
		"SP Jain School of Global Management": "/spjain.png",
	};

	// Parse the start "Mon YYYY" of a period into a sortable timestamp.
	const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
	const startTime = (period) => {
		const m = (period || "").match(/([A-Za-z]{3,})\s+(\d{4})/);
		if (!m) return 0;
		const month = MONTHS[m[1].slice(0, 3).toLowerCase()] ?? 0;
		return new Date(parseInt(m[2], 10), month, 1).getTime();
	};

	// Short labels for the compact timeline nodes (full name stays in the panel).
	const shortNameMap = {
		"SP Jain School of Global Management": "SP Jain University",
	};

	// One combined timeline: work + education, oldest → newest (left → right).
	const timelineEntries = [
		...workItems.map((w) => ({ ...w, kind: "work", badge: jobBadgeMap[w.company] || "/logo.png" })),
		...eduItems.map((e) => ({ ...e, kind: "education", badge: eduBadgeMap[e.company] || "/logo.png" })),
	]
		.map((e) => ({ ...e, short: shortNameMap[e.company] || e.company }))
		.sort((a, b) => startTime(a.period) - startTime(b.period));

	// Default to the most recent (rightmost) entry until the user picks one.
	const activeIndex = selectedIndex === null ? timelineEntries.length - 1 : selectedIndex;
	const selectedEntry = timelineEntries[activeIndex] || null;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Work & Education | ${INFO.main.title}`}</title>
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
						<div className="experience-hero">
							<div className="title experience-title">Work &amp; Education</div>
							<div className="subtitle experience-subtitle">Click any milestone to see the details.</div>
						</div>

						<div className="experience-timeline-shell" aria-label="Experience and education timeline">
							{timelineEntries.length === 0 ? (
								<div className="experience-empty">I'm compiling my timeline—check back soon.</div>
							) : (
								<div className="experience-horizontal-track" role="tablist" aria-label="Experience and education milestones">
									<div className="experience-horizontal-line" aria-hidden="true" />
									{timelineEntries.map((entry, idx) => {
										const isActive = idx === activeIndex;
										const isEdu = entry.kind === "education";
										const period = <span className="experience-job-period">{entry.period}</span>;
										const marker = (
											<span className="experience-job-marker">
												<img src={entry.badge} alt="" className="experience-job-badge" />
												<span className="experience-job-company">{entry.short}</span>
											</span>
										);
										return (
											<button
												type="button"
												key={`entry-${idx}`}
												role="tab"
												className={`experience-timeline-item experience-job-node experience-job-node--${entry.kind} ${isActive ? "is-active" : ""}`}
												onClick={() => setSelectedIndex(idx)}
												aria-selected={isActive}
												aria-label={`${entry.kind === "work" ? "Work" : "Education"}: ${entry.company}, ${entry.role}, ${entry.period}`}
											>
												{/* Education is inverted: name on top, time below the dot */}
												<span className="experience-node-top">{isEdu ? marker : period}</span>
												<span className="experience-job-dot" aria-hidden="true" />
												<span className="experience-node-bottom">{isEdu ? period : marker}</span>
											</button>
										);
									})}
								</div>
							)}
						</div>

						{selectedEntry && (
							<div className="experience-detail-panel">
								<div className="experience-detail-head">
									<div>
										<div className="experience-detail-kicker">
											{selectedEntry.kind === "work" ? "Work experience" : "Education"}
										</div>
										<div className="experience-detail-title">{selectedEntry.company}</div>
										<div className="experience-detail-meta">
											<span>{selectedEntry.role}</span>
											<span>•</span>
											<span>{selectedEntry.period}</span>
											{selectedEntry.location && (
												<>
													<span>•</span>
													<span>{selectedEntry.location}</span>
												</>
											)}
										</div>
									</div>
									{selectedEntry.stack && (
										<div className="experience-stack" aria-label={`${selectedEntry.company} tech stack`}>
											{selectedEntry.stack.map((tech) => (
												<span className="experience-chip" key={tech}>
													{tech}
												</span>
											))}
										</div>
									)}
								</div>

								{selectedEntry.summary && <p className="experience-detail-summary">{selectedEntry.summary}</p>}

								{Array.isArray(selectedEntry.highlights) && selectedEntry.highlights.length > 0 && (
									<ul className="experience-highlights experience-detail-highlights">
										{selectedEntry.highlights.map((h, i) => (
											<li key={i}>{h}</li>
										))}
									</ul>
								)}

								{Array.isArray(selectedEntry.coursework) && selectedEntry.coursework.length > 0 && (
									(() => {
										const hasMark = selectedEntry.coursework.some((c) => c.mark);
										return (
											<div className="experience-coursework">
												<div className="experience-coursework-label">Key coursework</div>
												<div className="experience-course-table-wrap">
													<table className="experience-course-table">
														<thead>
															<tr>
																<th>Unit</th>
																{hasMark && <th className="course-col-center">Mark</th>}
																<th className="course-col-center">Grade</th>
																<th>Bucket</th>
															</tr>
														</thead>
														<tbody>
															{selectedEntry.coursework.map((c, i) => {
																const isTop = c.grade === "HD" || c.grade === "A+";
																return (
																	<tr key={i} className={isTop ? "is-top" : ""}>
																		<td className="course-cell-name">{c.name}</td>
																		{hasMark && <td className="course-col-center">{c.mark || "—"}</td>}
																		<td className="course-col-center">
																			<span className={`experience-course-grade ${isTop ? "is-top" : ""}`}>{c.grade}</span>
																		</td>
																		<td className="course-cell-bucket">
																			{c.bucket}
																			{isTop && <span className="course-star" aria-label="top grade"> ⭐</span>}
																		</td>
																	</tr>
																);
															})}
														</tbody>
													</table>
												</div>
											</div>
										);
									})()
								)}

								{selectedEntry.transcript && (
									<a
										className="experience-transcript-link"
										href={selectedEntry.transcript}
										target="_blank"
										rel="noopener noreferrer"
									>
										<span aria-hidden="true">📄</span>
										View full transcript (PDF)
									</a>
								)}
							</div>
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

