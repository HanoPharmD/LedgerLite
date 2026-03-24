# LedgerLite — GitHub Pages Deployment Guide

Publishing LedgerLite takes about 5 minutes. Here's exactly what to do.

---

## What you'll publish

| File | Purpose |
|------|---------|
| `index.html` | Landing page (what people see first) |
| `app.html` | The actual LedgerLite application |

---

## Step 1 — Create a GitHub Account

Go to [github.com](https://github.com) and sign up (free).

---

## Step 2 — Create a New Repository

1. Click the **＋** button (top right) → **New repository**
2. Name it: `ledgerlite` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

---

## Step 3 — Upload Your Files

### Option A — Upload via Browser (easiest)

1. On your new repo page, click **uploading an existing file**
2. Drag and drop these files:
   - `index.html`
   - `app.html`
3. Click **Commit changes**

### Option B — Using Git (if you have it installed)

```bash
git clone https://github.com/YOUR_USERNAME/ledgerlite.git
cd ledgerlite
# Copy index.html and app.html into this folder
git add .
git commit -m "Initial release"
git push
```

---

## Step 4 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top tab)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

GitHub will show a banner: *"Your site is live at https://YOUR_USERNAME.github.io/ledgerlite/"*

It takes 1–2 minutes to go live.

---

## Step 5 — Update YOUR_USERNAME links

Before uploading, open `index.html` and replace all instances of `YOUR_USERNAME` with your actual GitHub username:

```
https://github.com/YOUR_USERNAME/ledgerlite
→ becomes →
https://github.com/johndoe/ledgerlite
```

There are 4 places to update (search for `YOUR_USERNAME`).

---

## Your URLs

After publishing:

| URL | What it is |
|-----|------------|
| `https://YOUR_USERNAME.github.io/ledgerlite/` | Landing page |
| `https://YOUR_USERNAME.github.io/ledgerlite/app.html` | The app |

---

## Updating the App

When you make changes to LedgerLite:

1. Re-export `bookkeeper.html` from Claude
2. Rename it to `app.html`
3. Upload to GitHub (same process as Step 3)
4. GitHub Pages updates automatically within 1–2 minutes

---

## Custom Domain (Optional)

If you own a domain (e.g. `ledgerlite.com`):

1. In your repo, create a file called `CNAME` containing just your domain:
   ```
   ledgerlite.com
   ```
2. Point your domain's DNS to GitHub Pages:
   - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME: `YOUR_USERNAME.github.io`
3. In GitHub Pages settings, enter your custom domain

---

## Electron Desktop Releases (Optional)

To host desktop downloads on GitHub:

1. Build your Electron installers (`npm run build:win` / `npm run build:mac`)
2. In your repo, click **Releases** → **Create a new release**
3. Tag it `v1.0.0`, upload your `.exe` and `.dmg` files
4. Publish the release

The download links in `index.html` (`/releases`) will automatically point to your latest release.

---

## That's it

Your app is now:
- ✅ Publicly accessible at a free URL
- ✅ Auto-updates when you push new files
- ✅ Served over HTTPS (GitHub handles SSL)
- ✅ Zero hosting cost, forever
