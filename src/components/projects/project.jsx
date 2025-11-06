import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;
	const navigate = useNavigate();

	const handleCardClick = (e) => {
		// If the click started on an anchor inside the description, let it proceed
		const path = e.nativeEvent?.composedPath?.() || [];
		if (path.some((el) => el?.tagName === "A")) return;
		if (link) navigate(link);
	};

	const onKeyDown = (e) => {
		if ((e.key === "Enter" || e.key === " ") && link) {
			e.preventDefault();
			navigate(link);
		}
	};

	return (
		<React.Fragment>
			<div className="project">
				<div
					className="project-container"
					onClick={handleCardClick}
					tabIndex={0}
					role="button"
					aria-label={`Open ${title} details`}
					onKeyDown={onKeyDown}
				>
					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="project-title">{title}</div>
					<div
						className="project-description"
						onClick={(e) => e.stopPropagation()}
						dangerouslySetInnerHTML={{ __html: description }}
					/>
					<div className="project-link" aria-hidden>
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="project-link-text">{linkText}</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
