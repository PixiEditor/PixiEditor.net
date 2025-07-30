// @ts-check
import { defineConfig } from 'astro/config';
import type { Plugin } from 'vite';
import tailwindcss from "@tailwindcss/vite";

import mdx from '@astrojs/mdx';

import solidJs from '@astrojs/solid-js';

import { remarkAlert } from "remark-github-blockquote-alert";

import sitemap from '@astrojs/sitemap';


function patchLucideStyles(): Plugin {
  return {
    name: 'patch-lucide-css',
    enforce: 'pre',

    transform(code, id) {
      const isLucideCss =
        id.includes('lucide') && id.endsWith('.css');

      if (isLucideCss) {
        const patched = code.replace(/font-size:\s*inherit\s*;?/g, '');

        return {
          code: patched,
          map: null,
        };
      }

      return null;
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://pixieditor.net",
  integrations: [mdx(), solidJs(), sitemap(
    {
      filter: (page) => page !== "https://pixieditor.net/purchaseSuccess/",
    }
  )],
  markdown: {
    remarkPlugins: [remarkAlert]
  },
  vite: {
    plugins: [tailwindcss(), patchLucideStyles()],
    css: {
      devSourcemap: true
    }
  }
});