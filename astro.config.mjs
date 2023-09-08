import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import node from "@astrojs/node";
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {

    },
    apiOptions: {

    },
    bridge: process.env.PUBLIC_ENV !== 'production',
  })],
  output: process.env.PUBLIC_ENV === 'preview' ? 'server' : 'static',
  adapter: process.env.PUBLIC_ENV === 'preview' ? node({mode:'standalone'}) : undefined,
});