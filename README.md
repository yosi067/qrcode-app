# QR Code Generator | QR Code 產生器

A privacy-first, Apple-style minimalist QR Code generator. Fully client-side — no server, no tracking.

一個注重隱私、Apple 極簡風格的 QR Code 產生器。全前端運作，無伺服器、無追蹤。

---

## ✨ Features | 功能特色

| Feature | 功能 |
|---------|------|
| **Instant QR generation** — real-time preview as you type | **即時產生** — 輸入即預覽 QR Code |
| **Fully client-side** — your data never leaves the browser | **純前端** — 資料不離開瀏覽器 |
| **Apple-style UI** — glassmorphism, smooth animations, SF Pro typography | **Apple 風格 UI** — 毛玻璃、流暢動畫、SF Pro 字體 |
| **Responsive (RWD)** — optimized for mobile, tablet, and desktop | **響應式設計** — 行動端、平板、桌面完美適配 |
| **Multilingual** — auto-detects browser language (EN, 繁中, 简中, ES, JA, FR) | **多國語系** — 自動偵測瀏覽器語言（英、繁中、簡中、西、日、法） |
| **Download PNG** — export QR code as image | **下載 PNG** — 匯出 QR Code 圖片 |
| **Copy to clipboard** — one-click copy image | **複製到剪貼簿** — 一鍵複製圖片 |
| **Advanced settings** — error correction level (L/M/Q/H), size, colors | **進階設定** — 糾錯等級、尺寸、前景/背景色 |

---

## 🛠 Tech Stack | 技術棧

- **React** + **Vite** — fast build and HMR
- **Tailwind CSS v4** — utility-first styling
- **qrcode** (npm) — QR code generation via Canvas
- **GitHub Actions** — CI/CD auto-deploy to GitHub Pages

---

## 🚀 Getting Started | 開始使用

```bash
# Install dependencies | 安裝依賴
npm install

# Development server | 開發伺服器
npm run dev

# Production build | 正式構建
npm run build

# Preview production build | 預覽構建結果
npm run preview
```

---

## 📦 Deployment | 部署

This project auto-deploys to **GitHub Pages** via GitHub Actions on every push to `main`.

本專案在每次推送到 `main` 分支時，會透過 GitHub Actions 自動部署到 **GitHub Pages**。

### Manual setup | 手動設定

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the site deploys automatically

---

## 📁 Project Structure | 專案結構

```
src/
├── components/
│   ├── Header.jsx          # Navigation bar | 導覽列
│   ├── InputSection.jsx    # Text input & settings | 輸入與設定
│   └── OutputSection.jsx   # QR preview & actions | 預覽與操作
├── i18n.js                 # Multilingual support | 多國語系
├── App.jsx                 # Main layout & QR logic | 主佈局與邏輯
├── main.jsx                # Entry point | 進入點
└── index.css               # Tailwind + custom styles | 樣式
```

---

## 📄 License

MIT
