# portognjeeen

Ognjen Marinković's portfolio, built with Next.js, React, TypeScript, and Tailwind CSS.

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

This runs ESLint, generates Next.js route types, checks TypeScript, and builds the production app. Use `npm start` to serve that build. Building downloads Inter through `next/font`, so it needs access to Google Fonts when the font is not cached.

The `allowScripts` entry permits `unrs-resolver@1.12.2` to prepare its native binary for ESLint. When updating that package, review its install script and update the entry with `npm install-scripts approve unrs-resolver`.

## Editing the portfolio

- `components/Header.tsx` and `components/Socials.tsx` contain the profile and contact links.
- `components/AboutMe.tsx` contains the introduction and resume link.
- `components/Education.tsx` contains work experience and education in reverse start-date order. Its timeline uses an ordered list, HTML dates, and Tailwind styles. Set an entry's `end` to `null` for a current role.
- `components/Projects.tsx` contains project descriptions, screenshots, technologies, and links.
- Each project's `archived` field controls its Archived badge. These flags reflect GitHub status checked on September 12, 2026; update them when archiving or restoring a repository.
- `public/resume.pdf` is the downloadable resume. Project images are in `public/projects`.
- `app/globals.css` defines the portfolio colors, light color scheme, and keyboard focus style.

Portfolio components render on the server. The timeline needs no JavaScript or UI library. `react-icons` supplies the social icons, and Next.js optimizes images through Sharp.

## Dependencies

`package-lock.json` records exact dependency versions. TypeScript stays on 6.0 and ESLint on 9 for compatibility with the installed Next.js lint tooling. Review those constraints when upgrading the tooling.

Flowbite React has been removed along with its Next.js plugin, generated files, Tailwind integration, and `deepmerge-ts` override.
