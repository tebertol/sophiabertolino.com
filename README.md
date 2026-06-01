# sophiabertolino.com — static site (GitHub Pages)

A static rebuild of Sophia Bertolino's site, modeled on the layout of leahremini.com.
No WordPress, no database, no hosting fees.

## Sections
- **index.html** – full-bleed main photo, name, social icons (LinkedIn / Instagram / Facebook)
- **about.html** – About photo + About text
- **resume.html** – embedded PDF + download button
- **reels.html** – Reels & Self Tapes (Reels, Acting, Singing, Movement)
- **performances.html** – 12 performance videos, original order
- **gallery.html** – grouped masonry galleries with click-to-enlarge
- **contact.html** – Formspree contact form

## Before you publish — 2 things to do

### 1. Download the images + resume from your live WordPress site
The gallery photos and the resume PDF are NOT in this folder yet (they still live on
WordPress). Run ONE of these from inside this folder while the WordPress site is still up:

- **Windows (PowerShell):**  `.\download-assets.ps1`
- **Mac/Linux:**             `bash download-assets.sh`

This fills `assets/gallery/` (62 photos) and `assets/files/Sophia_Bertolino_Resume.pdf`.

### 2. Set up the free contact form (Formspree)
In `contact.html`, replace `YOUR_FORMSPREE_ID` with the form ID from your Formspree account
(the same service used for tombertolinomusic.com).

## Files already included
- `assets/img/main.jpg`  – new main photo (May 10 2026)
- `assets/img/about.jpg` – new About photo (May 10 2026)
- `assets/style.css`, `assets/script.js`
- `.nojekyll` – tells GitHub Pages to serve the assets folder as-is

The logo is a text wordmark (“SOPHIA BERTOLINO”), exactly as leahremini.com uses text — no
image file needed.
