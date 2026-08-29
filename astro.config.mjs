// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://your-username.github.io", // TODO: set to your actual GitHub Pages URL
  base: "/", // TODO: set to "/reponame" if the repo isn't your-username.github.io, before deploying
  integrations: [sitemap()],
});
