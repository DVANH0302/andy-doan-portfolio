// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Andy's Blogs",
	tagline: "DSA and Java",
	favicon: "img/favicon.ico",

	future: {
		v4: true,
	},

	// Served under /blogs/ of the portfolio. Override with env vars if hosted elsewhere.
	url: process.env.BLOGS_SITE_URL || "http://localhost:3000",
	baseUrl: process.env.BLOGS_BASE_URL || "/blogs/",

	onBrokenLinks: "throw",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/",
					sidebarPath: "./sidebars.js",
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				respectPrefersColorScheme: true,
			},
			navbar: {
				title: "Andy's Blogs",
				logo: {
					alt: "Logo",
					src: "img/logo.svg",
				},
				items: [
					{ to: "/dsa", label: "DSA", position: "left" },
					{ to: "/java", label: "Java", position: "left" },
					{
						// Raw HTML link: Docusaurus <Link> would prepend the /blogs/ baseUrl.
						type: "html",
						position: "right",
						value: `<a class="navbar__item navbar__link" href="${
							process.env.PORTFOLIO_URL || "/"
						}">Back to portfolio</a>`,
					},
					{
						href: "https://www.linkedin.com/in/dva0302/",
						label: "LinkedIn",
						position: "right",
					},
					{
						href: "https://github.com/DVANH0302",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				copyright: `© ${new Date().getFullYear()} Andy Doan. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
