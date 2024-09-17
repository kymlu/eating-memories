// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import tailwindcssNesting from 'tailwindcss/nesting'

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://kymlu.github.io',
  base: 'eating-memories',
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcssNesting(),
        ]
      }
    }
  },
  integrations: [
    tailwind({
      nesting: true
    }), 
    icon()],
});