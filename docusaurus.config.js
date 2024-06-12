// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nerd.ms',
  tagline: 'Nerds are smart',
  favicon: 'img/favicon.ico',

  // Prodcutie URL van de website
  url: 'https://nerd.ms',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ModernNerdplace', // Usually your GitHub org/user name.
  projectName: 'nerd.ms', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsible: true,
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/modernnerdplace/nerd.ms',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Nerd.ms',
        logo: {
          alt: 'Nerd.ms Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            href: 'https://buymeacoffee.com/nerdfluencer',
            className: 'header-pizza-link',
            'aria-label': 'pizza',
            position: 'right',
            html: '<img src="https://img.buymeacoffee.com/button-api/?text=Support a Nerd&emoji=🤓&slug=nerdfluencer&button_colour=5F7FFF&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00" alt="Buy me a Nerd" />',
          }
         
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mede mogelijk gemaakt door',
            items: [
              {
                label: 'vdBurg.it',
                to: 'https://vdBurg.it',
              },
              {
                label: 'Fabio van der Burg',
                to: 'https://vdBurg.it',
              },
            ],
          }, {
            title: 'Donateurs',
            items: [
              {
                label: 'Boyd Heeres',
                href: 'https://www.linkedin.com/in/boyd-heeres',
              }, 
              {
                label: 'Ceriel Roland',
                href: 'https://www.linkedin.com/in/cerielroland',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Spotify',
                href: 'https://open.spotify.com/show/6BplO9t7XhNoduLgFSVqAV?si=dca8654696064929&nd=1&dlsi=a2f7f6b0b2eb4916',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/modernnerdplace',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/99HTc9JBca',
              },
              {
                label: 'Meetup',
                href: 'https://www.meetup.com/modern-nerdplace/',
              },
            ],
          },
         
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nerd.ms.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      plugins: [
        async function myPlugin(context, options) {
          return {
            name: "docusaurus-tailwindcss",
            configurePostCss(postcssOptions) {
              // Appends TailwindCSS and AutoPrefixer.
              postcssOptions.plugins.push(require("tailwindcss"));
              postcssOptions.plugins.push(require("autoprefixer"));
              return postcssOptions;
            },
          };
        },
      ],
    }),
};

export default config; 