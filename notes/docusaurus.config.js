// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Andy's Notes",
  tagline: 'DSA, ML, System Design and Research',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Served under /notes/ of the portfolio. Override with env vars if hosted elsewhere.
  url: process.env.NOTES_SITE_URL || 'http://localhost:3000',
  baseUrl: process.env.NOTES_BASE_URL || '/notes/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
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
        title: "Andy's Notes",
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/dsa', label: 'DSA', position: 'left'},
          {to: '/ml', label: 'ML', position: 'left'},
          {to: '/system-design', label: 'System Design', position: 'left'},
          {to: '/research', label: 'Research', position: 'left'},
          {href: '/', label: 'Back to portfolio', position: 'right', target: '_self'},
          {href: 'https://www.linkedin.com/in/dva0302/', label: 'LinkedIn', position: 'right'},
          {href: 'https://github.com/DVANH0302', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Andy Doan. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
