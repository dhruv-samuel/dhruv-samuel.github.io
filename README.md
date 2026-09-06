# Portfolio site

An Astro portfolio built for showing 3D/VFX work: a reel-first homepage, a
work grid, individual project case-study pages, About, and Contact. Theme
(dark/light) swaps with one line in `src/site.config.ts`.

## Run it locally

You need Node.js installed.

    npm install
    npm run dev

Then open http://localhost:4321

## Add your real content

1. **Site info** — edit `src/site.config.ts`: title, tagline, description,
   email, social links, resumeUrl, and `colorScheme: "dark"` or `"light"`.
2. **Homepage reel** — in `src/pages/index.astro`, set `heroVimeoId` to your
   Vimeo video ID (recommended — plays muted/looping/chromeless via Vimeo's
   background mode), or `heroVideo` for a short local clip in `public/video/`.
3. **Projects** — each file in `src/content/projects/` is one project. Edit
   the four placeholder files or add new ones. Front matter fields:
   - `title`, `role`, `order` (controls sort order everywhere)
   - `category` — one of `vfx-3d`, `amv`, `edits` (see `src/lib/categories.ts`
     for labels). The `/work/` page only shows filter pills once 2+ categories
     are actually in use.
   - `software` — list of tools used, shown as tags
   - `thumbnail` — path to a still under `public/`, e.g. `/img/project1.jpg`
   - `vimeo_id` — takes priority over `youtube_id`/`cover_video`
   - `youtube_id` — takes priority over `cover_video`; use for pieces already
     hosted on YouTube (e.g. AMVs/edits)
   - `cover_video` — optional, path to a short local clip for the project hero
   - `gallery` — list of additional image paths for the detail page
   - Body text below the `---` is the project write-up.
4. **About page** — edit `src/pages/about.astro`, replace the photo
   placeholder with `public/img/about.jpg` and update the `<img>` reference.
5. Put real image files in `public/img/` — keep video off this repo (see below).

## Why no video files in this repo

GitHub hard-blocks any file over 100MB and discourages repos over ~1GB —
a showreel or render breakdown will blow past that fast. Host video on
Vimeo (recommended — check the video's privacy setting allows embedding on
your domain) and use `vimeo_id` in front matter instead of committing `.mp4`
files here.

## Deploy to GitHub Pages (via GitHub Actions)

Astro isn't natively built by GitHub Pages the way Jekyll is, so this repo
includes `.github/workflows/deploy.yml`, which builds the site and deploys
it to Pages on every push to `main`.

1. Create a new GitHub repo, push this project to it.
2. In the repo: Settings → Pages → Source → set to **GitHub Actions**.
3. If the repo isn't named `your-username.github.io`, set `base: "/repo-name"`
   in `astro.config.mjs` (and `site` to your actual Pages URL) before pushing,
   or internal nav/project links will break once deployed.
4. Push to `main` — the Action builds and deploys automatically. Check the
   Actions tab for build status.
