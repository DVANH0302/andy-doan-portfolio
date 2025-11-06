import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const SKELETON_MS = 320;   // shorter skeleton, rely on longer fade for smoothness

const PageTransition = ({ children }) => {
	const location = useLocation();
	const [showSkeleton, setShowSkeleton] = useState(false);
	const [fadeInKey, setFadeInKey] = useState(location.pathname);
	const timerRef = useRef(null);

	useEffect(() => {
		// On route change: show skeleton briefly, reset fade-in, and scroll to top smoothly
		setShowSkeleton(true);
		setFadeInKey(location.pathname);
		try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch { /* noop */ }
		window.clearTimeout(timerRef.current);
		timerRef.current = window.setTimeout(() => setShowSkeleton(false), SKELETON_MS);
		return () => window.clearTimeout(timerRef.current);
	}, [location.pathname]);

	return (
		<div key={fadeInKey} className="page-fade-in">
			{children}
			{showSkeleton && (
				<div className="page-skeleton-overlay" aria-hidden>
					<div className="page-skeleton">
						<div className="sk-row sk-title" />
						<div className="sk-row sk-subtitle" />
						<div className="sk-row" />
						<div className="sk-row" />
					</div>
				</div>
			)}
		</div>
	);
};

export default PageTransition;
