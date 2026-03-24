# LedgerLite Desktop

Turn LedgerLite into a native desktop app for Windows and Mac using Electron.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later (includes npm)
- That's it.

---

## Quick Start (Run Without Installing)

```bash
# 1. Open a terminal in this folder
cd LedgerLite-Desktop

# 2. Install dependencies (one time only)
npm install

# 3. Launch the app
npm start
```

The app opens in its own window. Data is stored in your OS user profile — it persists between sessions and is completely offline.

---

## Build an Installer

### Windows (.exe installer)
```bash
npm run build:win
```
Output: `dist/LedgerLite Setup 1.0.0.exe`
→ Double-click to install. Creates a Start Menu shortcut and Desktop shortcut.

### Mac (.dmg)
```bash
npm run build:mac
```
Output: `dist/LedgerLite-1.0.0.dmg`
→ Open the .dmg and drag LedgerLite to your Applications folder.

### Both at once
```bash
npm run build:all
```
Note: Building a Mac .app on Windows (and vice versa) requires additional setup.
For cross-platform builds, use a Mac to build the Mac version, and Windows for the Windows version.

---

## Where Data is Stored

Electron stores localStorage data in your OS user data directory:

- **Windows:** `%APPDATA%\ledgerlite\`
- **Mac:** `~/Library/Application Support/ledgerlite/`

This is separate from any browser — your data will NOT appear in Chrome or Firefox.

---

## Updating the App

1. Replace `index.html` with the new version from LedgerLite
2. Re-run `npm start` or rebuild the installer

---

## Adding an Icon (Optional)

Place these files in the `LedgerLite-Desktop` folder:
- `icon.ico` — Windows icon (256x256 recommended)
- `icon.icns` — Mac icon (512x512 recommended)
- `icon.png` — Fallback (512x512)

Free tools to create icons: [iConvert](https://iconverticons.com/), [CloudConvert](https://cloudconvert.com/)

---

## Troubleshooting

**"electron: command not found"**
→ Run `npm install` first.

**Windows Defender warning on the .exe**
→ Normal for unsigned apps. Click "More info" → "Run anyway". To remove: sign the app with a code signing certificate ($100–$500/year from Comodo, DigiCert, etc.)

**Mac: "cannot be opened because the developer cannot be verified"**
→ Right-click → Open → Open anyway. Or: `xattr -cr /Applications/LedgerLite.app`
