# Alter HUB

## Run
```bash
npm install
npm run dev
```

## Deploy to Netlify
Push to GitHub, connect repo on Netlify. Build settings auto-detected from `netlify.toml`.

Or drag the `dist` folder (after `npm run build`) into Netlify.

## Edit
- **Text, nav, services, portfolio, stats, email, socials** → `src/App.jsx` top of file (`CONTENT` object)
- **Portfolio images** → replace Unsplash URLs in `CONTENT.portfolio` with your own (drop images in `public/` and reference as `/your-image.jpg`)
- **Colors** → `tailwind.config.js` + `src/index.css` (`:root` vars)
- **Fonts** → `index.html` Google Fonts link + `tailwind.config.js`
- **CTA button** → `CONTENT.hero.cta` / `CONTENT.hero.ctaHref` and the CTA section
