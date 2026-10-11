# portognjeeen

Ognjen Marinković's portfolio, built with Next.js, React, TypeScript, and CSS. The main page is designed as a small cinema at night: letterboard signs, lit posters, a film strip, a screenplay, and end credits.

Visit [the portfolio](https://portognjeeen.vercel.app/).

## Local development

Use Node.js 24.21.0 and npm 12.0.2. The `.nvmrc` file pins the Node version. Node.js 24.17 or newer in the 24 LTS line is also supported.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. On Windows with nvm-windows, select the installed runtime with `nvm use 24.21.0` first.

## Checks

```sh
npm run check
```

This runs the cinema helper tests with Node's built-in test runner, runs ESLint, generates Next.js route types, checks TypeScript, and builds the production app. `npm test` runs the tests alone. Use `npm start` to serve that build. Barlow Condensed, Libre Franklin, Courier Prime, and Nanum Pen Script are local WOFF2 files loaded through `next/font/local`; builds do not download fonts. The files are subset to Latin and Latin Extended-A.

The `allowScripts` entry permits `unrs-resolver@1.12.2` to prepare its native binary for ESLint. When updating that package, review its install script and update the entry with `npm install-scripts approve unrs-resolver`.

## Editing the portfolio

- `components/Header.tsx` and `components/Footer.tsx` contain the navigation, contact address, and the links in the end credits.
- `components/Letterboard.tsx` turns a heading into letterboard tiles. Each tile gets a small fixed tilt from `lib/cinema.ts`, so the sign renders the same on the server and the client. The heading keeps its readable text in `aria-label`.
- `components/Projects.tsx` contains the two featured projects (poster, screenshot, description, technologies, link) and the four archived projects in the `archivedProjects` array. Their status was checked on September 12, 2026; update the list when archiving or restoring a repository.
- `components/AboutMe.tsx` contains the full biography as a screenplay page with four scenes, pencil marks from `components/ScriptMark.tsx`, and handwritten margin notes. All paragraphs remain visible without JavaScript. The resume link appears at the beginning and end.
- `components/Education.tsx` contains work experience and education in reverse start-date order. The year tiles are generated from each entry's dates. Set an entry's `end` to `null` for a current role.
- `components/CinemaMotion.tsx` runs every animation: film grain, dust in the projector beam, letters dropping onto signs, the reel change on project screenshots, the film strip drift, typed scene headings, pencil marks, the footage counter, poster tilt, and the scene index. It does nothing when the visitor prefers reduced motion, and the page is complete without it.
- `public/resume.pdf` is the downloadable resume. Project images are in `public/projects`.
- `app/globals.css` defines the palette, layout, animations, responsive rules, and keyboard focus styles.
- `app/fonts` contains the font files and their licenses. `app/layout.tsx` loads the fonts and defines page metadata. `app/icon.svg` is the source for the portfolio favicon.
