# jacksonburzynski — personal/lab website

Static site for Jackson Burzynski (Assistant Professor, University of
Oklahoma; ATLAS + Muon Collider). No build step: plain HTML + one CSS file.

- **Canonical host**: https://jacksonburzynski.web.cern.ch/ (CERN EOS,
  `/eos/user/j/jburzyns/www`). Canonical tags on every indexable page point
  here. GitHub Pages (https://jburzy.github.io) serves the same content.
- **Deploy**: push to `main` → GitHub Pages updates automatically. The CERN
  mirror is synced manually: ssh to lxplus (needs the user's 2FA — Claude
  cannot do it), then clone from GitHub and `rsync --delete` into the EOS
  path (see `deploy-cern.sh` for the recipe; an hourly acron job has been
  suggested but not set up).
- **Local preview**: `python3 -m http.server 8931 --directory jburzy.github.io`
  (configured in `../.claude/launch.json` as "site").

## Design system

IBM Carbon, loaded from the IBM CDN only (`1.www.s81c.com`) — never Google
Fonts or other CDNs (rule from the carbon-builder skill installed at
`../.claude/skills/carbon-builder`):

- `plex/sans.css`, `plex/mono.css` — IBM Plex fonts
- `web-components/tag/v2/latest/themes.css` — Carbon tokens; body carries
  `cds-theme-zone-white` or `cds-theme-zone-g100`
- Web components in use (same CDN path): `accordion.min.js` (teaching,
  news), `tabs.min.js` (tutorial). Verified tags: `cds-accordion`,
  `cds-accordion-item` (attr `title`, `open`), `cds-tabs`/`cds-tab`
  (attrs `value`, `target` → toggles `hidden` on the target element).

All colors via `var(--cds-*)` tokens so light/dark themes both work.
Hardcoded colors only where token equivalents don't exist (tag palette,
magenta accent) — always with a `.cds-theme-zone-g100` override.

### Theming

Every page carries the same inline script at the top of `<body>`: follows
`prefers-color-scheme`, with a manual override in `localStorage('theme')`
set by the header `.theme-toggle` button (moon/sun). When adding a page,
copy the whole `<head>` + header + footer chrome from an existing page.

### CSS

Single stylesheet `css/site.css`, referenced as `site.css?v=N`.
**Bump N on every CSS change, in all HTML files AND
`tools/build_meetings.py`** — this cache-busting exists because browsers
held stale CSS. Beware cascade-order traps: several past bugs came from
equal-specificity rules later in the file overriding earlier ones (e.g.
`.logo-row img` vs `.logo--dark`). Grep before adding competing selectors.

Breakpoints: 42rem (tablet) and 66rem (desktop). Root font scales are NOT
used (a 112.5% experiment was reverted); desktop body text is 18px via a
66rem media query. Layout: `.container` (max 99rem), `.section` = heading
rail left / body right at ≥66rem, `.doc` = full-width markdown-style pages
(tutorial), `.projects-grid` = 2-col cards ≥66rem.

### Research figures

Inline SVGs (240×240 viewBox) using classes `rs-subtle`, `rs-struct`,
`rs-accent(-fill)`, `rs-magenta(-fill)`, `rs-text(--accent/--magenta)` —
theme-aware via tokens. To visually check a figure without a browser:
extract the SVG, inline a small style block with light-mode colors, render
with `qlmanage -t file.svg -s 480 -o dir`, and Read the PNG.

### News tags

`.tag--conference` blue · `.tag--publication` green · `.tag--award` purple
· `.tag--team` magenta (people/personnel) · `.tag--seminar` teal ·
`.tag--featured` cyan (headline items). Carbon tag palette with dark
variants. News items: newest first, one `<li>` per item in the year's
`cds-accordion-item`, label = "Mon D, YYYY".

## Content conventions

- **Voice**: research/project text uses "We"/"Our group". News items are
  third person, first name only ("Jackson presented…", "The group's…").
  The "Join us" blurb and "I am recruiting!" notes deliberately keep first
  person — do not change them.
- Page titles: home is "Burzynski Lab", subpages "Page — Burzynski Lab"
  (Google branding choice; the Person JSON-LD keeps the personal name).
- No semicolons in prose (periods instead). Fine in code.
- "I am", not "I'm".
- PDFs open in a new tab (`target="_blank" rel="noopener"`).
- External links get `rel="noopener"`. Verify new URLs with curl before
  committing.
- Nav order: Home · Research Overview · Tutorial · Meetings · News · Links
  · Teaching. The header/nav/footer chrome is duplicated in: index,
  research, tutorial, teaching, news, links, meetings (generated) — and
  the template inside `tools/build_meetings.py`. **Chrome changes must be
  applied to all of them.**
- Commit style: short imperative subject + body, trailer
  `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`. Push after
  each change set (user expects deploys). If push is rejected, rebase —
  the meetings workflow commits to main daily.

## Pages

- `index.html` — video hero (ATLAS event display, autoplay muted loop,
  poster, reduced-motion + visibility handling, transparent header overlay
  that solidifies on scroll), About with circular avatar in the section
  rail, icon link row (inline SVG brand icons), Prospective students.
- `research.html` — "Burzynski Lab": centered lede + CERN/ATLAS/IMCC logo
  column (theme-swapped via `.logo--light`/`.logo--dark` pairs), Group
  members (role columns, Friday 4pm Nielsen 365 meeting note), Current
  Projects (4 SVG cards), Getting started teaser, Recent talks,
  Selected publications, Join us.
- `tutorial.html` — "Getting Started", Carbon tabs: Basics / OSCER /
  Python / ATLAS. Markdown-style `.doc` layout with code blocks.
  ouheptmp partition (will become ouhep), OSCER support contact.
- `meetings.html` — GENERATED, do not hand-edit. Daily GitHub Action
  (`.github/workflows/meetings.yml`) runs indicomb (cloned from CERN
  GitLab) against Indico category 704 with secret `INDICO_API_TOKEN`,
  then `tools/build_meetings.py` wraps the output in site chrome. Page is
  `noindex` and excluded from the sitemap. Edit the template inside
  `build_meetings.py`, not the output.
- `teaching.html` — accordion per semester; PHYS-2203 (Fall 2026) with
  Canvas link, Syllabus and Lecture notes styled as `.lecture-list` rows.
- `projects.html` — "Potential Research Projects": student project ideas
  with PhD/Capstone badges and reference links. DRAFT: currently unlinked,
  noindex, and out of the sitemap while the text is being revised. To
  publish: re-link from research.html's Getting started section, drop the
  noindex meta, re-add to sitemap.xml. Never in the nav.
- `news.html`, `links.html` — see conventions above.

## Assets

- `assets/jackson-avatar-*.jpg` — face-centered square crops from the
  6213×4142 original on the `source` branch (`my-app/src/images/img1.jpg`).
- `assets/atlas-event-display.mp4` + poster — hero video (original
  encoding kept; avconvert made it larger; no ffmpeg on this machine).
- `assets/logos/` — CERN outline SVG (blue + white recolor), ATLAS from
  the official 2021 logo pack in ~/Downloads (bg rect stripped, white
  recolor), IMCC PNG + derived white-text version (canvas-processed:
  neutral pixels → white).
- `favicon.svg`/`favicon-32.png`/`apple-touch-icon.png` — Carbon
  `chart--sunburst` icon in Carbon blue.
- `googlec0b1b979c63e0e60.html` — Search Console verification, keep.
- `sitemap.xml` — update when adding/removing indexable pages.

## SEO

Canonical = CERN URL. JSON-LD Person on index (ORCID
0000-0002-4690-0528, INSPIRE authors/1861291, LinkedIn, GitHub jburzy +
burzynski-lab org, OU directory). robots.txt points at the sitemap.

## Facts

Email burzynski@ou.edu. Group: Timothy Mathew (postdoc, June 2026).
GitHub org: burzynski-lab. Old React site source lives on the
`origin/source` branch (CV there is stale — current CV synced from
iCloud to `assets/jackson-burzynski-cv.pdf`).
