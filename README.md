# Portfolio site

A Jekyll portfolio scaffold built for showing 3D/VFX work: a reel-first
homepage, a work grid, individual project case-study pages, About, and
Contact. Theme (dark/light) swaps with one line in `_config.yml`.

## Run it locally

You need Ruby and Bundler installed.

    bundle install
    bundle exec jekyll serve

Then open http://localhost:4000

## Add your real content

1. **Site info** — edit `_config.yml`: title, tagline, description, email,
   social links, resume_url, and `color_scheme: dark` or `color_scheme: light`.
2. **Homepage reel** — drop your video in `assets/video/`, then in
   `index.html`'s front matter set `hero_video: /assets/video/yourfile.mp4`
   (and optionally `hero_poster`).
3. **Projects** — each file in `_projects/` is one project. Edit the four
   placeholder files or add new ones. Front matter fields:
   - `title`, `role`, `order` (controls sort order everywhere)
   - `software` — list of tools used, shown as tags
   - `thumbnail` — path to a still, e.g. `/assets/img/project1.jpg`
   - `cover_video` — optional, path to a clip for the project page hero
   - `gallery` — list of additional image paths for the detail page
   - Body text below the `---` is the project write-up.
4. **About page** — edit `about.md`, replace the photo placeholder with
   `assets/img/about.jpg` and update the `<img>` reference.
5. Put real image/video files in `assets/img/` and `assets/video/`.

## Deploy to GitHub Pages (free)

1. Create a new GitHub repo, push this project to it.
2. In the repo: Settings → Pages → Source → set to your default branch
   (e.g. `main`) and `/ (root)`.
3. GitHub builds and hosts it automatically at
   `https://yourusername.github.io/repo-name/`.
4. If it's not deployed at the root of the domain, set `baseurl` in
   `_config.yml` to `/repo-name` so internal links resolve correctly.
5. For a custom domain, add a `CNAME` file with your domain and point your
   domain's DNS at GitHub Pages per GitHub's docs.

If GitHub Pages build fails on a plugin, switch the Gemfile's plugin group
to `gem "github-pages", group: :jekyll_plugins` — GitHub Pages only
supports a specific plugin whitelist and that gem pins compatible versions.
