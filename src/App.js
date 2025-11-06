import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import Experience from "./pages/experience";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import PageTransition from "./components/common/PageTransition";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<PageTransition><Homepage /></PageTransition>} />
				<Route path="/about" element={<PageTransition><About /></PageTransition>} />
				<Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
				<Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
				<Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
				<Route path="*" element={<PageTransition><Notfound /></PageTransition>} />
			</Routes>
		</div>
	);
}

export default App;
