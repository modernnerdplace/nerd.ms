// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nerd.ms',
  tagline: 'Nerds are smart',
  favicon: 'img/favicon.ico',

  // Productie-URL (custom domain)
  url: 'https://nerd.ms',
  // Voor custom domain is baseUrl gewoon '/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub Pages deployment config
  organizationName: 'modernnerdplace', // GitHub org/user (lowercase)
  projectName: 'nerd.ms',              // repo-naam
  deploymentBranch: 'gh-pages',        // target branch voor Pages deployments

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          sidebarCollapsible: false,
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/modernnerdplace/nerd.ms/edit/main/',
        },
        blog: {
          showReadingTime: false,
          editUrl: 'https://github.com/modernnerdplace/nerd.ms/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Nerd.ms',
        logo: { alt: 'Nerd.ms Logo', src: 'img/logo.jpg' },
        items: [
          {
            type: 'html',
            position: 'right',
            className: 'header-pizza-link',
            value:
              '<a class="support-nerd-btn" href="https://buymeacoffee.com/nerdfluencer" target="_blank" rel="noopener noreferrer" aria-label="Support a Nerd (opens in a new tab)"><span class="support-nerd-btn__emoji" aria-hidden="true">🤓</span><span class="support-nerd-btn__label">Support a Nerd</span></a>',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mogelijk gemaakt door',
            items: [
              { label: 'vdBurg.it', to: 'https://vdBurg.it' },
              { label: 'Fabio van der Burg', to: 'https://vdBurg.it' },
            ],
          },
          {
            title: 'Sponsoren',
            items: [
              { label: 'Boyd Heeres', href: 'https://www.linkedin.com/in/boyd-heeres' },
              { label: 'Ceriel Roland', href: 'https://www.linkedin.com/in/cerielroland' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Spotify',
                href: 'https://open.spotify.com/show/6BplO9t7XhNoduLgFSVqAV?si=dca8654696064929&nd=1&dlsi=a2f7f6b0b2eb4916',
              },
              { label: 'GitHub', href: 'https://github.com/modernnerdplace' },
              { label: 'Discord', href: 'https://discord.gg/99HTc9JBca' },
              { label: 'Meetup', href: 'https://www.meetup.com/modern-nerdplace/' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nerd.ms.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

export default config;
