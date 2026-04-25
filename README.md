# NexFlow AI — Landing Page

A clean, responsive landing page for **NexFlow AI**, an AI automation platform.  
Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

---

## Project structure

```
nexflow-ai/
├── index.html   # Page markup
├── style.css    # All styles
├── main.js      # Waitlist form logic
└── README.md    # You are here
```

---

## Getting started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/nexflow-ai.git
cd nexflow-ai
```

### 2. Open locally

Just open `index.html` in your browser — no build step required.

```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

Or use a local dev server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## Connecting the waitlist to a real backend

In `main.js`, find the `joinWaitlist()` function and replace the `TODO` block with your preferred email service:

### Option A — Airtable

```js
fetch('https://api.airtable.com/v0/YOUR_BASE_ID/Waitlist', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ fields: { Email: email } })
});
```

### Option B — Mailchimp (via a serverless proxy)

```js
fetch('/api/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});
```

### Option C — Formspree (zero backend, free tier)

Change the waitlist form in `index.html` to point at your Formspree endpoint:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" placeholder="you@company.com" />
  <button type="submit">Join now</button>
</form>
```

---

## Deploying

### Vercel (recommended — free)

```bash
npm i -g vercel
vercel
```

### Netlify

Drag and drop the `nexflow-ai/` folder at [app.netlify.com](https://app.netlify.com).

### GitHub Pages

1. Push to GitHub  
2. Go to **Settings → Pages**  
3. Set source to `main` branch, `/ (root)`  
4. Your site is live at `https://YOUR_USERNAME.github.io/nexflow-ai`

---

## Customisation

| What               | Where              |
|--------------------|--------------------|
| Company name       | `index.html` (nav, footer) + `style.css` (.logo) |
| Accent colour      | `style.css` → `--accent` CSS variable |
| Hero headline      | `index.html` → `<h1>` |
| Feature cards      | `index.html` → `.feature-card` blocks |
| Contact email      | `index.html` → footer |
| Waitlist backend   | `main.js` → `joinWaitlist()` TODO block |

---

## License

MIT — use it however you like.
