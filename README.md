# Wedding Invitation Site

A premium cinematic wedding invitation experience built with React, Vite, Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scrolling.

## Features
- Full-screen cinematic hero and invitation opening sequence
- Romantic envelope interaction with layered paper styling
- Floating petal canvas animation
- Soft ambient motion and glowing typography
- Storytelling sections with timeline cards
- Animated gallery with lightbox
- Event details and RSVP form
- Live countdown timer
- Embedded map section
- Music autoplay after interaction and toggle control

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Project structure
- `src/App.jsx` � app shell and page orchestration
- `src/components/` � reusable page sections and interactions
- `src/hooks/useLenis.js` � Lenis + GSAP scroll integration
- `tailwind.config.js` � custom theme and font configuration
- `src/index.css` � global Tailwind styling and visual base

## Notes
- Music is loaded from a remote romantic instrumental track.
- The site is optimized for mobile, tablet, and desktop screens.
