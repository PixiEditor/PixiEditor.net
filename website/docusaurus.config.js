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
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    async: true,
    ["data-ad-client"]: "ca-pub-8372287848779618"
  },
  {
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8372287848779618",
    async: true,
    crossOrigin: "anonymous"
  }],
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
		googleAnalytics: {
		  trackingID: 'G-XLN6FQ07LW',
		  anonymizeIP: true,
		},
		gtag: {
		  trackingID: 'G-XLN6FQ07LW',
		  anonymizeIP: true,
		},
        theme: {
          customCss: [require.resolve('./src/css/theme.css')],
        }
        // ...
      },
    ],
  ],

  themeConfig: {
    prism:{
      theme: require('prism-react-renderer/themes/dracula'),
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
        {to: 'docs/introduction', label: 'Docs', position: 'left'},
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
          href: 'https://opencollective.com/pixieditor',
          label: 'Donate ✨',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: "colorpicker", label: "Color Picker", position: 'left'},
        {to: "roadmap", label: "Roadmap", position: 'left'}
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
            to: "docs/privacy-policy" 
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PixiEditor Organization`,
    },
    image: "img/PixiEditorBanner.png",
    sidebarCollapse: false,
    metadata: [
      { name: 'description', content: 'PixiEditor is a free pixel art editing software. Create beautiful sprites for your games and edit images. All packed in an eye-friendly dark theme.' },
      { name: 'theme-color', content: '#2c2c2c' }
    ]
  },
};