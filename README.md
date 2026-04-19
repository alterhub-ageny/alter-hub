# Alter Hub — Studio of Narrative

Brand: midnight (#08101C), ember gold (#D4A855), champagne (#F4D98A), bone (#EDE3CC).
Type: Cormorant Garamond (display/italic), Inter (body), JetBrains Mono (accents).

## Run
```bash
npm install
npm run dev
```

## Deploy (Netlify)
Push to GitHub → connect repo on Netlify. `netlify.toml` handles the rest.
Or `npm run build` and drag the `dist` folder into Netlify.

## Edit
- **All text / nav / services / portfolio / stats / email / socials** → `CONTENT` object at top of `src/App.jsx`
- **Portfolio images** → replace Unsplash URLs in `CONTENT.portfolio`. To use local images, drop them in `public/` and reference as `/your-image.jpg`
- **Colors** → `tailwind.config.js` + `src/index.css` (`:root` vars)
- **Logo mark** → `SunMark` component in `App.jsx` (inline SVG — recreates the horizon + sun from the guidelines)
- **Fonts** → `index.html` Google Fonts link + `tailwind.config.js`
