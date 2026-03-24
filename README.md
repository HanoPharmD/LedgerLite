# LedgerLite

**Simple bookkeeping for every business you manage.**

Upload bank statements → auto-categorize transactions → export to Excel, CSV, or QuickBooks.
Free. Private. No subscription. No cloud required.

---

## 🌐 Live Web Version

> **[Launch LedgerLite →](https://YOUR_USERNAME.github.io/ledgerlite/app.html)**

Or visit the landing page: [https://YOUR_USERNAME.github.io/ledgerlite/](https://YOUR_USERNAME.github.io/ledgerlite/)

---

## 🖥️ Desktop App (Windows & Mac)

For the most reliable experience — data lives on your computer, not in a browser.

**[⬇ Download Latest Release →](https://github.com/YOUR_USERNAME/ledgerlite/releases)**

### Build it yourself

```bash
cd LedgerLite-Desktop
npm install
npm start                # Run locally
npm run build:win        # Build Windows .exe installer
npm run build:mac        # Build Mac .dmg
```

Requires [Node.js](https://nodejs.org/) v18+.
See `LedgerLite-Desktop/README.md` for full instructions.

---

## 📁 Files in this repo

| File | What it is |
|------|------------|
| `index.html` | Landing page (hosted at root URL) |
| `app.html` | The LedgerLite application |
| `DEPLOY.md` | Step-by-step GitHub Pages deployment guide |
| `.nojekyll` | Tells GitHub Pages not to process files with Jekyll |
| `LedgerLite-Desktop/` | Electron desktop app project |
| `LedgerLite-Desktop/main.js` | Electron entry point |
| `LedgerLite-Desktop/package.json` | Node dependencies and build config |
| `LedgerLite-Desktop/index.html` | Copy of the app for desktop use |
| `LedgerLite-Desktop/README.md` | Desktop build instructions |

---

## ✨ Features

- 📂 Upload one or multiple bank statements (CSV or Excel)
- 🧠 Fuzzy rule matching — "BOFA" matches "Bank of America"
- 🏦 Handles any bank format: single amount, Debit/Credit, or Deposit/Withdrawal columns
- 🏷️ Auto-categorize income & expenses using saved templates
- 🏢 Multiple businesses, each with multiple templates
- 📊 Monthly reports with category breakdowns
- 🤖 AI business insights powered by Claude
- ⬇️ Export to CSV, Excel (.xlsx), or QuickBooks (.iif)
- 💾 Backup & restore via JSON file
- 🔒 100% private — your data never leaves your device

---

## 🔒 Privacy

LedgerLite has no backend server. All data is stored in your browser's localStorage (web) or your OS user profile (desktop app). No analytics, no tracking, no ads.

The AI Insights feature requires an internet connection to call the Anthropic API. Only a structured financial summary is sent — no raw transaction descriptions.

---

## 📖 How to Deploy (5 minutes)

See **[DEPLOY.md](./DEPLOY.md)** for the full step-by-step guide.

**Short version:**
1. Fork or upload files to a public GitHub repo
2. Go to Settings → Pages → Source: `main` branch, `/ (root)` folder
3. Save — your site is live at `https://YOUR_USERNAME.github.io/ledgerlite/`

---

## 🛠️ Updating

When a new version of LedgerLite is released:
1. Replace `app.html` with the new file
2. Also copy it to `LedgerLite-Desktop/index.html`
3. Push to GitHub — Pages updates within 1–2 minutes

---

*Built with care. No tracking. No ads. No subscription.*
