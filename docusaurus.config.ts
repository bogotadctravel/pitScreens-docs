import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'IDT App',
  tagline: 'Documentación técnica — Pantallas interactivas de los Puntos de Información Turística de Bogotá',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // URL real de GitHub Pages para este repo (project page, no org page)
  url: 'https://bogotadctravel.github.io',
  // Project page: debe coincidir con el nombre del repo
  baseUrl: '/pitScreens-docs/',

  organizationName: 'bogotadctravel',
  projectName: 'pitScreens-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IDT App',
      logo: {
        alt: 'IDT App',
        src: 'img/favicon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {label: 'Introducción', to: '/docs/intro'},
            {label: 'Instalación local', to: '/docs/instalacion'},
            {label: 'Módulo Kiosco', to: '/docs/kiosco/resumen-y-flujo'},
            {label: 'Panel Administrativo', to: '/docs/admin/resumen'},
          ],
        },
      ],
      copyright: `IDT App — Instituto Distrital de Turismo / Alcaldía Mayor de Bogotá D.C.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
