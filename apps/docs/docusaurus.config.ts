import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Mobiux labs form',
  tagline: 'Effortless Form Management',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mobiux-labs-form.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/forms',

  // GitHub pages deployment config.
  organizationName: 'Mobiux-Labs', // Your GitHub org/user name.
  projectName: 'forms', // Your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Mobiux-Labs/forms/tree/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/mobiux-social-card.jpg',
    navbar: {
      title: '@mobiux-labs',
      logo: {
        alt: 'Mobiux Labs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Mobiux-Labs/forms',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Form Renderer',
              to: '/docs/category/form-renderer',
            },
            {
              label: 'Form Builder',
              to: '/docs/form-builder',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/Mobiux-Labs/forms',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              to: 'https://mobiux.in',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mobiux Labs, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
