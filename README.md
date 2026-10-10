# jc-fang.github.io

Minimal Jekyll site (GitHub Pages compatible, no plugins or build step needed).

## Where to edit

| What | File |
|---|---|
| Name, photo, sidebar info/links, intro paragraphs | `_data/profile.yml` |
| News (newest first; older items fold automatically) | `_data/news.yml` |
| Publications grouped by theme | `_data/publications.yml` |
| Publication figures | `assets/images/pubs/` (filename referenced by `image:`) |
| Colors, fonts, spacing | variables at the top of `assets/css/style.css` |
| Number of news items shown before folding | `news_visible` in `_includes/news.html` |
| Add a sidebar icon | drop `name.svg` in `_includes/icons/`, use `icon: name` |

Page structure lives in `index.html`; each block is an include in `_includes/`.

## Run locally

Needs a recent Ruby. Prebuilt Ruby from Homebrew avoids compiling anything:

    brew install ruby@3.4
    export PATH="/opt/homebrew/opt/ruby@3.4/bin:$PATH"   # add to ~/.zshrc to keep
    gem install bundler
    bundle install
    bundle exec jekyll serve

Open http://localhost:4000. Edits to data, includes, CSS and JS rebuild automatically (refresh the page); restart after editing `_config.yml`.

## Deploy (publish to the internet)

The site is hosted by GitHub Pages at https://jc-fang.github.io. GitHub builds it with Jekyll itself, so you only push your files.

1. Preview locally first (see above) and check everything.
2. Commit and push to `master`:

       git status                 # review what will be included
       git add -A
       git commit -m "New website design"
       git push origin master

3. Wait 1-2 minutes. Build status: the repo's **Actions** tab on GitHub (a "pages build and deployment" run). A green check means it is live.
4. Open https://jc-fang.github.io and hard refresh (Cmd+Shift+R) to bypass the cache.

One-time check (only if the site doesn't update): on GitHub go to the repo's **Settings > Pages** and make sure the source is "Deploy from a branch", branch `master`, folder `/ (root)`.

If something looks wrong live, fix it locally and push again. To undo a bad deploy: `git revert HEAD` then `git push origin master`.

Notes
- `Gemfile` and `vendor/` are only for local preview; GitHub ignores them.
- To link a CV, put `CV.pdf` in the repo root and uncomment the `cv` line in `_data/profile.yml`.
