export const categories = {
  "vfx-3d": "VFX & 3D",
  amv: "Anime Music Videos",
  edits: "Edits",
} as const;

export type CategoryKey = keyof typeof categories;
