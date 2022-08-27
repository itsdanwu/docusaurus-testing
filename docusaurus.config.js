// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Metropolis',
  tagline: 'The on-chain permissions layer for DAOs',
  url: 'https://docs.metropolis.info',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'orcaprotocol', // Usually your GitHub org/user name.
  projectName: 'orca-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: 'changelog',
          blogSidebarTitle: 'Changelog',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    {
      image: './static/img/openGraphLogo.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      announcementBar: {
        id: 'support_us',
        content:
          'Welcome to Metropolis! Click to see if you <a target="_blank" rel="noopener noreferrer" href="https://pod.xyz">qualified for our airdrop!</a>',
        backgroundColor: '#C4BFF2',
        textColor: '#110F1F',
        isCloseable: true,
      },
      navbar: {
        logo: {
          alt: 'Metropolis Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Overview',
          },
          {to: '/docs/sdk/sdk-overview', label: 'SDK', position: 'left'},
          {to: '/docs/smart-contracts/metropolis-contracts', label: 'Contracts', position: 'left'},
          {to: '/changelog', label: 'Changelog', position: 'left'},
/**       {to: '/docs/guides/pod-blueprints/', label:'Pod Blueprints', position: 'right'}, */ 
          {
            href: 'https://github.com/orcaprotocol',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
          {
            type: 'html',
            className: 'launchAppNavButton',
            value: '<a href="https://pod.xyz/" target="_blank" class="launchAppNavButton">Launch App</a>',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.gg/metropolis',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/metropolis',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Changelog',
                to: '/changelog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/orcaprotocol',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sonar Labs Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }
    
};

module.exports = config;
