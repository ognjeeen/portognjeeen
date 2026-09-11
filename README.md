<h1>Welcome to my simple portfolio!</h1>

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

For more information about me, visit the [portognjeeen](https://portognjeeen.vercel.app/)! 😊

## Local development

Use Node.js 24.21.0 and npm 12.0.2. The `.nvmrc` file pins the Node version. Node.js 24.17 or newer in the 24 LTS line is also supported.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run all checks before shipping changes:

```sh
npm run check
```

This runs ESLint, generates Flowbite files and Next.js route types, checks TypeScript, and builds the production app. Use `npm start` to serve the production build. Building downloads the Inter font through `next/font`, so the first build needs access to Google Fonts.

On Windows with nvm-windows, select the installed runtime with `nvm use 24.21.0` before running these commands.

The `allowScripts` entry permits `unrs-resolver@1.12.2` to prepare its native binary for ESLint. npm 12 requires this explicit entry. When updating that package, review its install script and update the entry with `npm install-scripts approve unrs-resolver`.

## Dependency upgrade

The September 2026 upgrade uses Next.js 16.3.5, React 19.3, Tailwind CSS 4.3.3, Flowbite React 0.12.17, and Sharp 0.35.4. `package-lock.json` records the exact installed dependency tree.

Tailwind's colors and font are configured in `app/globals.css`. The Flowbite Next.js plugin generates component classes from imports. Edit `.flowbite-react/config.json` to change that setup; its generated files are ignored by Git. The portfolio keeps its light theme.

Two development tools stay on the latest compatible release lines:

- TypeScript 6.0.3: `typescript-eslint` currently requires TypeScript below 6.1. TypeScript 7 also changes the compiler API used by existing tooling.
- ESLint 9.39.5: `eslint-plugin-react`, included by `eslint-config-next`, does not yet declare ESLint 10 support. npm marks ESLint 9 as unsupported; revisit this pin when the React plugin supports 10.

The Node types follow the Node 24 runtime. Node 26 is the newer Current line; this project uses Node 24 LTS.

The scoped `deepmerge-ts` override replaces Flowbite's pinned 7.1.5 with 8.0.2 to address [GHSA-ggr8-5vv4-36mx](https://github.com/advisories/GHSA-ggr8-5vv4-36mx). Flowbite uses the retained `deepmerge` and `deepmergeCustom` APIs for plain theme objects. Remove the override when Flowbite updates its dependency.

Migration references: [Tailwind 4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide), [Flowbite configuration](https://flowbite-react.com/docs/customize/config), and [Next.js ESLint setup](https://nextjs.org/docs/app/api-reference/config/eslint).
