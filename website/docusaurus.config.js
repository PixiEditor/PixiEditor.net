const siteConfig = {
  projectName: 'pixieditor.net',
  organizationName: 'PixiEditor Organization',

  repoUrl: "https://github.com/PixiEditor/PixiEditor",

  /* path to images for header/footer */
  footerIcon: 'img/favicon-96x96.png',

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports =
{
  favicon: 'img/favicon.ico',
  title: "PixiEditor",
  tagline: 'A beautiful pixel art editor',
  url: 'https://pixieditor.net', // Your website URL
  baseUrl: '/', // Base URL for your project */
  projectName: "PixiEditor",
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: '../docs',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.json'),
        },
        theme: {
          customCss: [require.resolve('./src/css/theme.css')],
        }
        // ...
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true
    },
    navbar: {
      title: "PixiEditor",
      logo: {
        alt: "PixiEditor Logo",
        src: "img/favicon-96x96.png"
      },
      items: [
        {to: 'docs/introduction', label: 'Docs', position: 'left'},
        {to: 'help', label: 'Help', position: 'left'},
        {
          href: 'https://github.com/PixiEditor/PixiEditor',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://opencollective.com/pixieditor',
          label: 'Donate ✨',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      logo: {
        alt: "PixiEditor Logo",
        src: "img/favicon-96x96.png",
        href: "/"
      },
      links: [
        {
          title: "Docs",
          items: [
            {
            label: "Getting started",
            to: "docs/Introduction"
            }
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/PixiEditor/"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/PixiEditor"
            },
            {
              label: "Discord",
              href: "https://discord.gg/qSRMYmq"
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCT5XvyvX1q5PAIaXfWmpsMQ"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Donate",
              href: "https://opencollective.com/pixieditor"
            }
          ]
        },
        {
          title: "Legal",
          items: [
            
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PixiEditor Organization`,
    },
    image: "img/favicon-96x96.png",
    sidebarCollapse: false
  }
};