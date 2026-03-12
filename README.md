# Personal Portfolio.

A fast, responsive, accessible portfolio built with plain HTML, CSS, and JavaScript. Ready for GitHub Pages.

## Customize

1. Edit `index.html`:
   - Replace `Your Name`, `you@example.com`
   - Update social links and `og:url`
2. Edit `script.js`: update the `projects` array.
3. Replace `assets/avatar.svg` if desired. Optionally add `resume.pdf` to the root.

## Run locally

- Open `index.html` directly, or start a quick server:
```bash
python -m http.server 5500
```

## Deploy to GitHub Pages

1. Create a GitHub repo (public). For a user site, name it `your-username.github.io`. For a project site, any name is fine.
2. From this folder, initialize git and push:
```bash
cd Portfolio
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```
3. Enable Pages (if it’s a project site): Settings → Pages → Source: Deploy from a branch → Branch: `main` (root).

Your site:
- User site: `https://your-username.github.io`
- Project site: `https://your-username.github.io/your-repo/`

Optional: add a custom domain via Settings → Pages and a `CNAME` DNS record.

License: MIT
