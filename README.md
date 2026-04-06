# RPM Planner PWA

Tony Robbins RPM (Result-Purpose-Massive Action Plan) life planner — Progressive Web App.

## Access
🌐 **Live app:** https://YOUR_GITHUB_USERNAME.github.io/rpm-planner/

## Setup (one time, 5 minutes)

### 1. Create a GitHub account
Go to [github.com](https://github.com) if you don't have one.

### 2. Create a new repository
1. Click **+** → New repository
2. Name it `rpm-planner`
3. Set to **Public** (required for free GitHub Pages)
4. Click **Create repository**

### 3. Upload these files
1. In your new repo, click **Add file** → **Upload files**
2. Drag all files from this folder (index.html, manifest.json, sw.js, icon*.png, README.md)
3. Click **Commit changes**

### 4. Enable GitHub Pages
1. Go to repo **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → **/ (root)**
4. Click **Save**
5. Wait ~60 seconds, then visit `https://YOUR_USERNAME.github.io/rpm-planner/`

### 5. Add to iPhone home screen
1. Open the URL in Safari on iPhone
2. Tap the **Share** button (box with arrow)
3. Tap **Add to Home Screen**
4. Tap **Add**

The app now works like a native app, offline included.

## Gist Sync (sync between desktop extension and iPhone)

### One-time setup:
1. Go to [github.com/settings/tokens/new](https://github.com/settings/tokens/new)
2. Name: `RPM Planner Sync`
3. Tick **gist** scope only
4. Click **Generate token** — copy it immediately
5. In the PWA: tap ⚙ Sync → paste token → Save
6. Tap **⬆ Push** (first time creates a new Gist automatically)
7. Copy the Gist ID shown
8. In Chrome Extension: Export panel → paste same token + Gist ID

### Daily use:
- **Before leaving desktop:** ⬆ Push in extension
- **On iPhone:** ⬇ Pull in PWA
- **Before returning to desktop:** ⬆ Push from PWA → ⬇ Pull in extension
