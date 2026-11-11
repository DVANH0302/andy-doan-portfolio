import React, { useState } from "react";

import INFO from "../../data/user";
import "./styles/journey.css";

const Journey = () => {
	const items = Array.isArray(INFO.achievements) ? INFO.achievements : [];
	const [selected, setSelected] = useState(0);

	if (items.length === 0) return null;

	const active = items[selected] || items[0];

	return (
		<div className="journey">
			<div className="journey-head">
				<div className="title journey-title">My Story</div>
				<div className="subtitle journey-subtitle">
					A few little moments that shaped how I got here, from a curious kid who fell in
					love with code, to building things I hope really help people.
				</div>
			</div>

			{/* Horizontal timeline (same style as the Work &amp; Education page) */}
			<div className="journey-track" role="tablist" aria-label="My story milestones">
				<div className="journey-line" aria-hidden="true" />
				{items.map((it, idx) => {
					const isActive = idx === selected;
					return (
						<button
							type="button"
							key={idx}
							role="tab"
							className={`jn-node ${isActive ? "is-active" : ""}`}
							onClick={() => setSelected(idx)}
							aria-selected={isActive}
							aria-label={`${it.year}, ${it.tagline}`}
						>
							<span className="jn-node-top">
								{it.tagline && <span className="jn-node-tagline">{it.tagline}</span>}
								<span className="jn-node-year">{it.year}</span>
							</span>
							<span className="jn-dot" aria-hidden="true" />
							<span className="jn-node-label">{it.short}</span>
						</button>
					);
				})}
			</div>

			{/* Detail panel — re-mounts on select for a slide-in (PowerPoint-style) transition */}
			<div className="jn-panel" key={selected}>
				<div className="jn-media">
					<img src={active.image} alt={active.event} loading="lazy" />
				</div>
				<div className="jn-body">
					<div className="jn-year-badge">{active.year}</div>
					<h3 className="jn-title-text">{active.title}</h3>
					{active.event && <div className="jn-badge">🏆 {active.event}</div>}
					<p className="jn-story">{active.story}</p>
				</div>
			</div>
		</div>
	);
};

export default Journey;
