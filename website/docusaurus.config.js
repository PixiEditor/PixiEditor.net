module.exports =
{
  favicon: 'img/favicon.ico',
  title: "PixiEditor",
  tagline: 'A beautiful pixel art editor',
  url: 'https://pixieditor.net', // Your website URL
  baseUrl: '/', // Base URL for your project */
  projectName: "pixieditor.github.io",
  organizationName: 'PixiEditor',
  trailingSlash: false,
  scripts: [{
    src: 'https://cloud.umami.is/script.js',
    async: true,
    ["data-website-id"]: '4bd73c8c-e42a-4c6a-8ac6-97ce418a3a93'
  },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,	
        theme: {
          customCss: [require.resolve('./src/css/theme.css')],
        }
        // ...
      },
    ],
  ],

  themeConfig: {
    prism:{
      theme: require('prism-react-renderer').dracula,
      additionalLanguages: ['csharp'],
    },
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
        {to: 'https://pixieditor.net/docs/', label: 'Docs', position: 'left'},
        {href: 'https://forum.pixieditor.net', label: 'Forum', position: 'left'},
        {to: 'help', label: 'Help', position: 'left'},
        {
          to: 'download',
          label: 'Download',
          position: 'right',
          id: 'download-nav'
        },
        {
          href: 'https://github.com/PixiEditor/PixiEditor',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: "donate",
          label: 'Donate ❤',
          className: 'btn-text',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: "colorpicker", label: "Color Picker", position: 'left'},
        {to: "v2", label: "2.0 Waitlist", position: 'left'}
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
            to: "https://pixieditor.net/docs/"
            }
          ],
        },
        {
          title: "Community",
          items: [
            {
               label: "Forum",
               href: "https://forum.pixieditor.net"
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/PixiEditor/"
            },
            {
              label: "Twitter/X",
              href: "https://x.com/PixiEditor"
            },
            {
              label: "Discord",
              href: "https://discord.gg/qSRMYmq"
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCT5XvyvX1q5PAIaXfWmpsMQ"
            },
            {
              label: "Instagram",
              href: "https://instagram.com/pixi.editor"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "2.0 Waitlist",
              to: "v2"
            },
            {
              label: "Color Picker",
              to: "colorpicker"
            },
            {
              label: "Donate",
              href: "https://opencollective.com/pixieditor"
            }
          ]
        },
        {
          title: "Legal",
          items: [
            {
            label: "Privacy Policy",
            to: "https://pixieditor.net/docs/privacy-policy" 
            },
            {
              label: "Terms of Service",
              to: "https://pixieditor.net/docs/terms-of-service"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pixi Labs Sp. z o.o<br/>Bładnicka 23, 43-430, Międzyświeć, Poland. | NIP: 5482769278 | REGON: 54203277600000 `,
    },
    image: "img/PixiEditorBanner.png",
    sidebarCollapse: false,
    metadata: [
      { name: 'description', content: 'PixiEditor is a free pixel art editing software. Create beautiful sprites for your games and edit images. All packed in an eye-friendly dark theme.' },
      { name: 'theme-color', content: '#2c2c2c' }
    ]
  },
};