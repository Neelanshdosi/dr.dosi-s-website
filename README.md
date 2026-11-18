# Dr. Dosi's Surgery & Gynec Clinic — Website

A responsive, mobile-first single-page website for **Dr. Dosi's Surgery & Gynec Clinic** located in Nai Abaadi, Mandsaur, Madhya Pradesh. Built with React (Vite + React, JavaScript) using modular components and plain CSS variables.

---

## 🎨 Design System & Theme
- **Theme**: Warm, wooden, rich and trustworthy.
- **Palette**: Deep Walnut (`#3B2416`), Teak / Oak (`#8B5A2B`), Cream / Ivory (`#FAF5EC`), Soft White cards, Muted Gold accents (`#C9A24B`), and Deep Maroon CTA (`#7A1F2B`).
- **Wood-Grain Effect**: Pure CSS gradients on header and footer with thin gold divider lines.
- **Typography**: Cormorant Garamond, Playfair Display, Inter, Noto Serif Devanagari, and Noto Sans Devanagari.
- **Interactions**: Floating mobile call button with gentle pulse ring, horizontal scroll-snap review carousel, and full-screen gallery lightbox.

---

## 🩺 Confirmed Doctor Details
- **Dr. Manisha Dosi**: `MBBS, DGO` — Gynecologist (pregnancy care, normal & cesarean deliveries, gynecological surgeries)
- **Dr. Jinesh Dosi**: `MBBS, MS` — Surgeon (general surgical procedures, evaluations, and post-op care)

---

## 🚀 Commands to Run & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Runs the site locally at `http://localhost:5173/` with hot module replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 How to Deploy (Vercel & Netlify)

### Option A: Deploy to Vercel (Recommended)
1. Initialize a git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Launch Dr. Dosi's Clinic website"
   git remote add origin https://github.com/<your-username>/dr-dosi-clinic.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects **Vite** (`npm run build` into `dist`).
4. Click **"Deploy"**.

### Option B: Drag-and-Drop Deploy (Netlify Drop)
1. Run `npm run build` in your terminal.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist/` folder onto the page to publish instantly without git.
