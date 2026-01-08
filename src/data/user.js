const INFO = {
	main: {
		title: "Reactfolio by Andy",
		name: "Viet Anh Doan",
		email: "doanvietanh03022003@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/DVANH0302",
		linkedin: "https://www.linkedin.com/in/dva0302/",
		facebook: "https://www.facebook.com/dvanh0302/",
		medium: "https://medium.com/@doanvietanh03022003",
	},

	homepage: {
		title: "Java Software Engineer",
		description:
			"I'm a passionate Java developer dedicated to building impactful and scalable solutions. This is a great place for you to learn more about my journey and how I contribute to real-world projects.",
		techstack:
			"My Tech Stack:\n" +
			" • Spring Boot\n" +
			" • React.js\n" +
			" • PostgreSQL\n" +
			" • AWS\n",
	},

	about: {
		skills: {
			languange: [
				{
					skill: "JavaScript",
					level: 80,
					icon: "path/to/java-icon.png",
				},

				{ skill: "Python", level: 100 },
				{ skill: "TypeScript", level: 70 },

				{ skill: "Java", level: 100 },
			],
			backend: [
				{ skill: "SpringBoot", level: 100 },
				{ skill: "FastAPI", level: 70 },
				{ skill: "ExpressJs", level: 80 },
			],
			frontend: [
				{ skill: "HTML/CSS", level: 70 },

				{ skill: "Tailwind", level: 80 },
				{ skill: "React.js", level: 100 },
			],
			database: [
				{ skill: "PostgresSQL", level: 100 },
				{ skill: "MySQL", level: 100 },
				{ skill: "MongoDB", level: 80 },
				{ skill: "Redis", level: 80 },
			],
			devops: [
				{ skill: "AWS", level: 90 },
				{ skill: "Docker", level: 80 },
				{ skill: "Git", level: 100 },
			],
		},

		title: "Hi there 👋, I'm Andy",
		description:
			"I love turning coffee and code into web apps people actually use. Whether it’s React, Java, or Spring Boot, I’m all about building software that’s reliable, intuitive, and maybe even a little fun. If it works smoothly and makes life easier, I’m happy",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	// Added structured work experience for the Experience page
	experience: [
		{
			role: "Fullstack Developer Intern",
			company: "Digital Nexus AI",
			location: "Remote",
			period: "Dec 2025 – Now",
			highlights: [
				"Building a React-based chat interface for an AI agent, integrating frontend UI with backend APIs.",
				"Collaborating in an Agile environment with iterative development and regular stand-ups.",
			],
		},
		{
			role: "Fullstack Developer Intern",
			company: "Business Web Solution",
			location: "Remote",
			period: "Apr 2025 – Aug 2025",
			highlights: [
				"Built and deployed 3 full-stack applications using React, Spring Boot, and PostgreSQL.",
				"Contributed in Agile sprints and process improvements, helping deliver projects more efficiently.",
			],
		},
		{
			role: "Solution Developer",
			company: "Vietnam Prosperity Joint Stock Commercial Bank (VPBank)",
			location: "Vietnam",
			period: "Jul 2024 – Feb 2025",
			highlights: [
				"Built RAG AI chatbot serving 200+ staff with approximately 90% accuracy and 5s response time.",
				"Generated AI descriptive metadata for 5K+ tables in the OpenMetadata catalog with approximately 90% accuracy.",
				"Built AWS Glue pipelines to scan 5K+ tables weekly in Amazon S3, keeping the chatbot knowledge base up-to-date.",
				"Built cost monitoring dashboard tracking $10K+ monthly AWS foundation model usage across 10+ teams.",
			],
		},
	],

	// Added education timeline entries
	education: [
		{
			role: "Master of Computer Science | Advanced Entry",
			company: "University of Sydney",
			location: "Sydney, Australia",
			period: "Feb 2025 – Nov 2026",
			highlights: [
				"Coursework: Enterprise Scale Software Architecture, Data Structures and Algorithms, Design Patterns",
			],
		},
		{
			role: "Bachelor of Data Science | Dean Lister | CGPA: 3.5",
			company: "SP Jain School of Global Management",
			location: "Sydney, Australia",
			period: "Sep 2021 – May 2024",
			highlights: [
				"Coursework: Big Data Analytics, Machine Learning, Deep Learning, Database Management Systems",
			],
		},
	],

	projects: [
		{
			title: "Astro Dreamers - Local Winner",
			description:
				"Built for the <a href='https://www.spaceappschallenge.org/2025/find-a-team/astrodreamers/?tab=project' target='_blank' rel='noopener noreferrer'>NASA Space Apps Challenge</a> - A real-time air quality monitoring platform. <br/><a href='https://astrodreamers.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Demo</a>",
			logo: "../spring.png",
			linkText: "View Project",
			link: "https://astrodreamers.netlify.app/",
			blogDemo: `
	<iframe width="100%" height="400" src="https://www.youtube.com/embed/YCcoRQnDjXk" frameborder="0" allowfullscreen style="border-radius:8px;margin-bottom:24px;"></iframe>

	<h2>AstroDreamers: Real-Time Air Quality Monitoring & Alert System</h2>
	<p><strong>AstroDreamers</strong> is a web application that empowers users to monitor air quality in real time, receive personalized alerts, and make informed health decisions. By integrating NASA's TEMPO satellite data with ground-based sensors from OpenAQ, the platform transforms complex atmospheric data into clear, actionable insights for everyone.</p>

	<h3>Summary</h3>
	<ul>
		<li>Track six key pollutants (SO₂, NO₂, PM2.5, PM10, O₃, CO) across multiple locations</li>
		<li>Color-coded indicators and customizable alerts with quiet hours</li>
		<li>Machine learning models (LightGBM, Random Forest) forecast PM2.5 levels 6-24 hours ahead</li>
		<li>Accessible dashboard for parents, people with asthma, and vulnerable groups</li>
	</ul>

	<h3>Live Demo & Resources</h3>
	<ul>
		<li><a href="https://astrodreamers.netlify.app" target="_blank" rel="noopener noreferrer">Live Project</a></li>
		<li><a href="https://drive.google.com/drive/folders/1LL79aQHEYn19HsfrMe7dLMc2qJRyZ9He?usp=sharing" target="_blank" rel="noopener noreferrer">Demo Videos</a></li>
		<li><a href="https://github.com/AstroDreamers" target="_blank" rel="noopener noreferrer">Source Code</a></li>
	</ul>

	<h3>How AstroDreamers Works</h3>
<h4>1. Interactive Map</h4>
<p>AstroDreamers opens with an interactive map showing air quality monitoring stations worldwide. Users can search for any location using the OpenAQ database, view real-time sensor data, and subscribe to locations they care about—such as home, work, or school. The map provides a global overview and helps users quickly find and add new locations to their dashboard.</p>
<img src="astro-1.png" alt="AstroDreamers Map" style="max-width:100%;border-radius:8px;margin:16px 0;" />

<h4>2. Dashboard Overview</h4>
<p>The dashboard displays all subscribed locations as cards, each showing live values for six pollutants (SO₂, NO₂, PM2.5, PM10, O₃, CO). Color-coded indicators (green to pink) make it easy to see air quality at a glance. An Air Quality Index reference table provides instant context for the numbers. Users can scroll through their locations and monitor air quality in real time.</p>
<img src="astro-2.png" alt="AstroDreamers Dashboard" style="max-width:100%;border-radius:8px;margin:16px 0;" />

<h4>3. Alert Configuration</h4>
<p>Users can set custom alert thresholds for each pollutant and define quiet hours (e.g., 10 PM–8 AM) to avoid notification fatigue. Alerts are triggered only when pollution exceeds user-defined limits outside quiet hours. Each sensor can be enabled, disabled, or edited individually, giving users full control over their notifications.</p>
<img src="astro-3.png" alt="Alert Configuration UI" style="max-width:100%;border-radius:8px;margin:16px 0;" />
<h4>4. Predictive Air Quality Modeling</h4>
<p>AstroDreamers is developing machine learning models to forecast PM2.5 levels 6-24 hours in advance. The LightGBM and Random Forest models use historical sensor and weather data to generate hourly forecasts, helping users plan ahead and avoid exposure to poor air quality.</p>
<img src="astro-4.png" alt="Prediction Model UI" style="max-width:100%;border-radius:8px;margin:16px 0;" />

	<h3>Tech Stack</h3>
	<ul>
		<li>Frontend: React.js, Tailwind CSS, Recharts</li>
		<li>Backend: Spring Boot, PostgreSQL, Hibernate, JWT</li>
		<li>Machine Learning: Python, LightGBM, scikit-learn, pandas, numpy</li>
		<li>Deployment: Netlify, Render, Docker</li>
		<li>Design: Figma</li>
	</ul>

	<h3>Future Goals</h3>
	<ul>
		<li>Deploy PM2.5 prediction models for 6-24 hour forecasts</li>
		<li>Interactive time-series graphs and model performance dashboard</li>
		<li>Email/SMS/push notifications for alerts and forecasts</li>
		<li>Mobile app and health device integration</li>
		<li>Community features and health recommendations</li>
	</ul>

	<h3>Data Sources</h3>
	<ul>
		<li>NASA TEMPO (satellite)</li>
		<li>OpenAQ (ground sensors)</li>
	</ul>

			`,
		},

		{
			title: "MicroCart",
			description:
				"A microservices-based e-commerce system demonstrating distributed transactions and event-driven architecture using the Saga pattern.",
			logo: "../spring.png",
			linkText: "View Project",
			link: "https://github.com/DVANH0302/MicroCart",
			blogDemo: `
	<h2>Microservices 101 — Saga Pattern</h2>
	<p>Have you ever wondered how microservices handle distributed transactions?</p>

	<h3>I. Overview</h3>
	<p>In this demo, the <strong>Store</strong> service orchestrates three external services: <strong>Bank</strong>, <strong>Delivery</strong>, and <strong>Email</strong>.</p>
	<img src="/systemds.png" alt="Store System Architecture" />
	<p>To place an order, Store must:</p>
	<ul>
		<li>Reserve stock</li>
		<li>Request payment from Bank</li>
		<li>Request delivery</li>
		<li>Send email notification</li>
	</ul>
	<p>Two‑phase commit (2PC) enforces ACID across services but is blocking and introduces a single point of failure. Instead, we use the <strong>Saga</strong> pattern to achieve <em>eventual consistency</em> without sacrificing performance.</p>

	<h3>II. How does Saga Pattern work?</h3>
	<p>A <strong>saga</strong> is a sequence of <em>local transactions</em> coordinated by messages. Each step commits locally and triggers the next step via an event/message. If a step fails, the system runs <strong>compensating actions</strong> to undo prior work.</p>
	<ul>
		<li><strong>Choreography:</strong> services react to domain events</li>
		<li><strong>Orchestration:</strong> an orchestrator directs each step</li>
	</ul>
	<p>We use <strong>orchestration</strong>: <strong>Store</strong> is the orchestrator; <strong>Bank</strong> and <strong>Delivery</strong> are saga participants. <strong>Email</strong> is not a participant (notifications only).</p>
	<img src="/sagaflow.png" alt="Saga Execution Workflow" />

	<h4>Execution</h4>
	<ol>
		<li>Validate User — authenticate/authorize</li>
		<li>Reserve Inventory — deduct stock</li>
		<li>Process Payment — call Bank (REST)</li>
		<li>Request Delivery — publish to RabbitMQ</li>
		<li>Complete Order — mark success and persist saga state</li>
	</ol>

	<h4>Compensation</h4>
	<ul>
		<li>Cancel delivery request</li>
		<li>Release reserved inventory if payment fails</li>
		<li>Refund payment if delivery fails</li>
		<li>Mark order as failed with audit log</li>
	</ul>
	<p>Saga state is persisted in Store to enable recovery and idempotency after restarts.</p>

	<h3>III. Saga under Failure Scenarios</h3>
	<h4>1) Bank Service Down</h4>
	<p>Release reserved stock and fail the order.</p>
	<img src="/bankdown.png" alt="Bank Service Down" />

	<h4>2) RabbitMQ Down</h4>
	<ul>
		<li>Store can’t send delivery requests → trigger compensation (cancel order, release inventory, refund)</li>
		<li>Delivery can’t update Store → fallback webhook ensures eventual update</li>
	</ul>
	<img src="/rabbitdown.png" alt="RabbitMQ Down" />

	<h4>3) DeliveryCo Service Down</h4>
	<p>Requests stay in RabbitMQ. With at‑least‑once delivery, once enqueued we treat the saga as completed and rely on retry when Delivery is back.</p>
	<img src="/deliverydown.png" alt="DeliveryCo Down" />

	<h3>IV. Summary</h3>
	<p>The <strong>Saga Pattern</strong> enables microservices to maintain consistency through local transactions and compensations—avoiding the blocking and single‑point‑of‑failure issues of 2PC. In our system, <strong>Store</strong> orchestrates the flow between <strong>Bank</strong> and <strong>Delivery</strong> to stay reliable under partial failures.</p>
	<p><em>Next step:</em> enforce idempotency for payment and delivery APIs to prevent duplicates.</p>
	<p><a href="https://github.com/DVANH0302/MicroCart" target="_blank" rel="noopener noreferrer">GitHub — DVANH0302/MicroCart</a></p>
			`,
		},

		{
			title: "Old Phone Deals",
			description:
				"A full-stack web application for buying and selling used phones.",
			logo: "../nodejs.png",
			linkText: "View Project",
			link: "https://github.com/DVANH0302/OldPhoneDeals",
			blogDemo: `
	<iframe width="100%" height="400" src="https://www.youtube.com/embed/IhPsyCLoNgQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:8px;margin-bottom:16px;border:none;"></iframe>

	<h2>Old Phone Deals</h2>

	<h3>Introduction</h3>
	<p>Old Phone Deals is an e‑commerce web application for buying and selling used phones. It provides a simple flow for buyers and sellers with listings, reviews, and end‑to‑end order management.</p>

	<h3>Features</h3>
	<h4>User</h4>
	<ul>
		<li>Add items to cart and place orders</li>
		<li>Write comments and ratings</li>
		<li>Create listings to sell devices</li>
	</ul>
	<div class="inline-gallery" aria-label="User features gallery">
		<img src="/user1.png" alt="Browse listings" />
		<img src="/user2.png" alt="Product details and reviews" />
		<img src="/user3.png" alt="Cart and checkout" />
	</div>

	<h4>Admin</h4>
	<ul>
		<li>Dashboard (revenue, alerts & recent order.</li>
		<li>Manage users & products</li>
		<li>View and audit activity logs</li>
	</ul>
	<div class="inline-gallery" aria-label="Admin features gallery">
		<img src="/admin0.png" alt="Dashboard" />
		<img src="/admin2.png" alt="Product approval" />
		<img src="/admin3.png" alt="Activity logs" />
	</div>

	<h3>Tech Stack</h3>
	<ul>
		<li>Frontend: React + Tailwind CSS</li>
		<li>Backend: Express.js (Node.js)</li>
		<li>Database: MongoDB</li>
	</ul>

	<p><a href="https://github.com/DVANH0302/OldPhoneDeals" target="_blank" rel="noopener noreferrer">View source on GitHub</a></p>
			`,
		},
	],
};

export default INFO;
