import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    order: z.number(),
    category: z.enum(["vfx-3d", "amv", "edits"]).default("vfx-3d"),
    software: z.array(z.string()).default([]),
    thumbnail: z.string().default(""),
    vimeo_id: z.string().default(""), // e.g. "123456789" — takes priority over youtube_id/cover_video if set
    youtube_id: z.string().default(""), // e.g. "dQw4w9WgXcQ" — takes priority over cover_video if set
    cover_video: z.string().default(""),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
