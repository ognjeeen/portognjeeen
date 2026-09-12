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

This runs the screening sequence regression test with Node's built-in test runner, runs ESLint, generates Next.js route types, checks TypeScript, and builds the production app. `npm test` runs the sequence test alone. Use `npm start` to serve that build. DM Sans and Instrument Serif are local files loaded through `next/font/local`; builds do not download fonts.

The `allowScripts` entry permits `unrs-resolver@1.12.2` to prepare its native binary for ESLint. When updating that package, review its install script and update the entry with `npm install-scripts approve unrs-resolver`.

## Editing the portfolio

- `components/Header.tsx`, `components/Footer.tsx`, and `components/Socials.tsx` contain the profile and contact links.
- `components/AboutMe.tsx` contains the full biography restored from `cfe724e`, arranged as four screenplay chapters. The desktop chapter index stays beside the manuscript; on small screens it sits above it. Margin notes combine quotes from the biography with brief rehearsal directions. All paragraphs remain visible without JavaScript. The resume link appears at the beginning and end.
- `components/ScriptMark.tsx` renders the hand-drawn underlines, circle, and highlighter stroke. `PortfolioMotion` draws these marks and reveals the handwritten notes once as they enter the viewport. Marks remain after scrolling back; reduced motion shows them immediately. The title stays still while its double underline is drawn. Notes use Segoe Print, Bradley Hand, or the device's cursive font.
- `components/Education.tsx` contains work experience and education in reverse start-date order. Its timeline uses an ordered list and HTML dates. Set an entry's `end` to `null` for a current role.
- `components/Projects.tsx` contains project descriptions, screenshots, technologies, and links.
- The `archivedProjects` array contains the four projects shown with Archived badges. Their status was checked on September 12, 2026; update the list when archiving or restoring a repository.
- `components/ProjectScreening.tsx` controls the featured project tabs. Click a tab or use arrow keys, Home, and End. Panel content comes from the server-rendered `Projects` component.
- `public/resume.pdf` is the downloadable resume. Project images are in `public/projects`.
- `app/globals.css` defines the Screening palette, responsive layout, and keyboard focus styles. The accepted typography uses Instrument Serif for display headings and DM Sans for project navigation and body text.
- `app/fonts` contains the font files and their licenses. `app/layout.tsx` loads the fonts and defines page metadata. `app/icon.svg` is the source for the portfolio favicon.

The project selector, `components/PortfolioMotion.tsx`, and `components/SmoothScroll.tsx` are client components. Text and project content come from server components. Both project panels share grid row heights so switching projects does not move the content below them. Next.js optimizes project screenshots through Sharp.

`SmoothScroll` uses Lenis for wheel inertia and anchor scrolling, driven by the GSAP ticker. Its `lerp` is `0.12`; raise it for a quicker response or lower it for a longer glide. ScrollTrigger follows that position without a second smoothing delay. Touch scrolling stays native. Enabling reduced motion destroys Lenis and removes its ticker callback, including when the preference changes while the page is open. Global CSS leaves `scroll-behavior` unset so it does not compete with Lenis.

`PortfolioMotion` handles the opening title, archive image masks, the biography's reading marker and active chapter, the experience marker, and the closing title. The projection and biography backgrounds keep the same bounds as their content. It uses GSAP media contexts to restore static content for reduced motion and clean up on unmount. Scrolling or pressing a key finishes the opening immediately.

`ProjectScreening` shows MovieTwist's poster and screenshot, closes that screenshot, changes the reel into the widget's gauges, and reveals the widget screenshot. The sequence follows scroll position in either direction. `lib/screening.ts` maps scroll progress to the selected project and screenshot reveal. React updates only when the selected project or preview accessibility state changes.

On viewports at least 1001px wide and 740px tall, a frame that fits inside the viewport stays pinned for 2.2 viewport heights per project. Each poster holds for the first 28% of its chapter before the screenshot starts opening. Tabs and the View the app button move through the sequence over 1.25 seconds through the `portfolio:scroll-to` event handled by `SmoothScroll`, so subsequent scrolling continues from that choice. The symbol and palette transition takes 1.15 seconds. Resizing rechecks whether the frame fits. Smaller or shorter viewports, reduced motion, and the initial server-rendered page show both projects and screenshots in normal document flow, with links to each project.

The screenshots illustrate the apps; they are not recordings or live usage data. The original motion direction and the implemented scope are recorded in `docs/portfolio-motion-direction.md`.

## Dependencies

`package-lock.json` records exact dependency versions. TypeScript stays on 6.0 and ESLint on 9 for compatibility with the installed Next.js lint tooling. Review those constraints when upgrading the tooling.

Flowbite React has been removed along with its Next.js plugin, generated files, Tailwind integration, and `deepmerge-ts` override.
