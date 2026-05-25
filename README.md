# TechCare Solutions Website

<p align="center">
  <img src="public/logo.svg" alt="TechCare Solutions" width="64" height="64">
</p>

<h3 align="center">บริษัทให้บริการเทคโนโลยีและซ่อมคอมพิวเตอร์</h3>

<p align="center">เว็บไซต์ที่สร้างด้วย Next.js 15, TypeScript, และ Tailwind CSS</p>

## ✨ Features

- 🎨 **Modern UI/UX** - ออกแบบสวยงามด้วย Tailwind CSS
- ⚡ **High Performance** - ใช้ Next.js 15 App Router
- 📱 **Fully Responsive** - รองรับทุกขนาดหน้าจอ
- 🎭 **Smooth Animations** - ใช้ Framer Motion
- 📝 **Contact Form** - ฟอร์มติดต่อพร้อม validation
- 🔍 **SEO Optimized** - เพิ่มประสิทธิภาพ SEO
- 🎯 **TypeScript** - Type-safe development
- 🎨 **Custom Components** - Component library ครบครัน
- 📊 **Analytics Ready** - พร้อมใช้งาน Google Analytics
- 🌐 **i18n Ready** - รองรับภาษาไทยและอังกฤษ

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.x | React Framework |
| **React** | 19.x | React Runtime |
| **TypeScript** | 5.x | Type Safety |
| **Tailwind CSS** | 4.x | Styling |
| **Framer Motion** | 12.x | Animations |
| **React Hook Form** | 7.x | Form Management |
| **Zod** | 4.x | Schema Validation |
| **Lucide React** | 0.54x | Icons |

## 🚀 Quick Start

### Prerequisites

- Node.js 18.18 หรือ 20.x แนะนำ 20.x
- npm, yarn, หรือ pnpm

### Installation

```bash
# 1. Clone repository
git clone https://github.com/yourusername/techcare-nextjs.git
cd techcare-nextjs

# 2. Install dependencies
npm install
# หรือ
yarn install
# หรือ
pnpm install

# 3. Create environment file
cp .env.local.example .env.local

# 4. Start development server
npm run dev
# หรือ
yarn dev
# หรือ
pnpm dev

```

## 🧩 Lightning CSS (Tailwind v4) & WASM Fallback

Tailwind v4 ใช้ Lightning CSS เป็นตัวแปลง CSS. บางสภาพแวดล้อม (เช่น Windows/WSL บางกรณี) อาจต้องใช้ WASM แทน native binary.

- Dev (WASM):

```bash
npm run dev:wasm
```

- Build (WASM):

```bash
npm run build:wasm
```

หากต้องการใช้ native binary ให้แน่ใจว่าไม่ได้ตั้งค่าตัวแปร `CSS_TRANSFORMER_WASM` และติดตั้ง dependencies ปกติด้วย `npm install`. ถ้ายังไม่เจอ native binary ให้ติดตั้งแพ็กเกจ binary ตามแพลตฟอร์ม (เช่น `lightningcss-win32-x64-msvc`).

## 🌐 Allowed Dev Origins (Next.js 15)

ถ้า dev server มีการเข้าถึงผ่าน IP/โดเมนอื่น (เช่น 172.22.32.1) ให้กำหนดรายการ origin ที่อนุญาตในไฟล์ `.env.local`:

```env
NEXT_ALLOWED_DEV_ORIGINS=http://localhost:3000,http://172.22.32.1:3000
```

โปรเจกต์นี้จะอ่านค่านี้และตั้งค่า `allowedDevOrigins` อัตโนมัติใน `next.config.ts` เฉพาะตอนพัฒนา

## 🅰️ Fonts

ฟอนต์ Sarabun ถูกโหลดผ่าน `next/font/google` ใน `src/app/layout.tsx`. กำจัดการอ้างอิงไฟล์ฟอนต์โลคอลที่ไม่มีใน `public/fonts` เพื่อหลีกเลี่ยง 404.

## ✅ Useful Scripts

- `npm run dev` – เริ่ม dev server (native Lightning CSS)
- `npm run dev:wasm` – เริ่ม dev server แบบบังคับ WASM
- `npm run build` – สร้างโปรดักชัน (native Lightning CSS)
- `npm run build:wasm` – สร้างโปรดักชันแบบบังคับ WASM
- `npm run type-check` – ตรวจ TypeScript แบบไม่ emit
- `npm run lint` – รัน ESLint
