const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Ultraschall Documentation',
  tagline: 'High-End Podcasting',
  url: 'https://Ultraschall.github.io',
  baseUrl: '/ultraschall-manual/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Ultraschall', // Usually your GitHub org/user name.
  projectName: 'ultraschall-manual', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Ultraschall/ultraschall-manual/edit/main/',
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
      metadata: [
        {name: 'title', content: 'Ultraschall Documentation'},
        {name: 'description', content: 'Learn how to make podcasts with Ultraschall'},
      ],
      colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: false,
      defaultMode: 'light',
      },
      navbar: {
        title: 'Ultraschall Handbuch',
        logo: {
          alt: 'Ultraschall Logo',
          src: 'img/Ultraschall_5-Logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Handbuch',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/Ultraschall/ultraschall-manual',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
          }, 
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Webseite',
                href: 'https://ultraschall.fm',
              },
              {
                label: 'Sendegate',
                href: 'https://sendegate.de',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ultraschall_fm',
              },
              {
                label: 'Mastodon',
                href: 'https://chaos.social/@ultraschall',
              },
            ],
          },
          {
            title: 'Mehr',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Ultraschall',
              },
              {
                label: 'Mitwirkende',
                to: '/docs/partcipants',
              }, 
              {
                label: 'Danke sagen',
                href: 'https://ultraschall.fm/danke/',
              }, 
              {
                label: 'Feedback geben',
                href: 'https://pad.gwdg.de/hJcF_2wfSm2uO46neH504w#',
              },
            ],
          },
          {
            title: 'Rechtliches',
            items: [
              {
                label: 'Datenschutzerklärung',
                href: 'https://ultraschall.fm/datenschutzerklaerung/',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Ultraschall, Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    },
    i18n: {
      defaultLocale: 'de',
      locales: ['de', 'en', 'zh-cn'],
    },
    scripts: [
      {
        src: 'https://ultraschall.github.io/ultraschall-manual/js/matomo.js',
        async: true,
      },
    ],
    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          // language: ["en", "zh"],
          // ```
        }),
      ], 
    ],
});
