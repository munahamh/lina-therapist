# Lina Psychologist App

React 19 + Vite + Tailwind CSS v4 project for Lina Psychology Clinic website.

## Development Server

- Run `npm run dev` to start the local Vite development server.
- Run `npm run build` to build for production.

## Project Structure

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into `#root`
- `src/App.tsx` - Page composition and booking visibility
- `src/sections/` - Individual page sections and local interaction state
- `src/components/ui/` - Shared visual components
- `src/components/` - Header, Footer, BookingModal and support illustrations
- `src/data/content.ts` - Images, support areas and FAQ content
- `src/hooks/useReveal.ts` - Scroll reveal behavior
- `src/index.css` - CSS entrypoint importing `src/styles/` files
- `index.html` - HTML shell
- `package.json` - Project dependencies and scripts
- `vite.config.ts` - Vite configuration
