# PixiEditor.net

Site is built using [Astro](https://docs.astro.build/en/getting-started/) and [Tailwind](https://tailwindcss.com/docs/)

## File structure

/src/pages - Pages (route definitions)

/src/assets - Assets like images

/src/components - Common Components

/src/layouts - Page Layouts

/src/content/blog - Blog Pages

/src/content/docs - Documentation Pages

/src/styles - Style Pages

## Developing & Running

### GitHub Codespaces

The easiest way to develop on this repo is via [GitHub Codespaces](https://docs.github.com/en/codespaces)

It automatically configures the Package Manager (yarn), installs extensions and installs dependencies

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/PixiEditor/PixiEditor.net)

You can then follow VS Code instructions for running

Note: If you want to run the Chrome/Edge debugger, you need to open the Codespace in your local [VS Code](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-github-codespaces-in-visual-studio-code) instead of github.dev

### VS Code / VSCodium

Go to the Run tab and run the `Development Server` launch configuration

For a Chrome/Edge Debugger, run the `Development Chrome` or `Development Edge` launch configuration

#### Recommended Extensions
* [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
* [Tailwind CSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
* [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

### CLI

```bash
yarn dev
```
