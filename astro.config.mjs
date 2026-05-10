// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://localhost',
  base: '/espace-bienestar/',
  integrations: [],
  vite: {
    plugins: [tailwindcss()]
  }
});