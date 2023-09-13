import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import react from "@astrojs/react";
import tailwind from '@astrojs/tailwind';
import netlify from "@astrojs/netlify/functions";
const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList',
      page: 'storyblok/Page',
      content_split_with_image: 'components/ContentSplitWithImage'
    },
    apiOptions: {},
    bridge: process.env.PUBLIC_ENV !== 'production'
  })],
  output: process.env.PUBLIC_ENV === 'preview' ? 'server' : 'static',
  adapter: process.env.PUBLIC_ENV === 'preview' ? netlify() : undefinded,
});