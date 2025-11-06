import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./bws.png"
								alt="BWS"
								className="work-image"
							/>
							<div className="work-title">Business Web Solutions</div>
							<div className="work-subtitle">
								Full Stack Developer Intern
							</div>
							<div className="work-duration">Apr 2025 – Aug 2025</div>
						</div>

						<div className="work">
							<img
								src="./vpbank.png"
								alt="VPBank"
								className="work-image"
							/>
							<div className="work-title">VPBank</div>
							<div className="work-subtitle">
								Solution Developer
							</div>
							<div className="work-duration">July 2024 - Feb 2025</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
