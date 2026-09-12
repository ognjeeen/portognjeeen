# portognjeeen

Ognjen Marinković's portfolio, built with Next.js, React, TypeScript, and CSS. The main page uses the selected Screening room design.

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

This runs ESLint, generates Next.js route types, checks TypeScript, and builds the production app. Use `npm start` to serve that build. DM Sans and Instrument Serif are local files loaded through `next/font/local`; builds do not download fonts.

The `allowScripts` entry permits `unrs-resolver@1.12.2` to prepare its native binary for ESLint. When updating that package, review its install script and update the entry with `npm install-scripts approve unrs-resolver`.

## Editing the portfolio

- `components/Header.tsx`, `components/Footer.tsx`, and `components/Socials.tsx` contain the profile and contact links.
- `components/AboutMe.tsx` contains the introduction and resume link.
- `components/Education.tsx` contains work experience and education in reverse start-date order. Its timeline uses an ordered list and HTML dates. Set an entry's `end` to `null` for a current role.
- `components/Projects.tsx` contains project descriptions, screenshots, technologies, and links.
- The `archivedProjects` array contains the four projects shown with Archived badges. Their status was checked on September 12, 2026; update the list when archiving or restoring a repository.
- `components/ProjectScreening.tsx` controls the featured project tabs. Click a tab or use arrow keys, Home, and End. Panel content comes from the server-rendered `Projects` component.
- `public/resume.pdf` is the downloadable resume. Project images are in `public/projects`.
- `app/globals.css` defines the Screening palette, responsive layout, and keyboard focus styles. The accepted typography uses Instrument Serif for display headings and DM Sans for project navigation and body text.
- `app/fonts` contains the font files and their licenses. `app/layout.tsx` loads the fonts and defines page metadata. `app/icon.svg` is the source for the portfolio favicon.

The project selector is the only client component. The rest of the portfolio and both project panels render on the server. Both panels share grid row heights so switching projects does not move the content below them. Next.js optimizes project screenshots through Sharp.

## Dependencies

`package-lock.json` records exact dependency versions. TypeScript stays on 6.0 and ESLint on 9 for compatibility with the installed Next.js lint tooling. Review those constraints when upgrading the tooling.

Flowbite React has been removed along with its Next.js plugin, generated files, Tailwind integration, and `deepmerge-ts` override.
