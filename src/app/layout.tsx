import type { Metadata } from 'next'
import { Sarabun } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const sarabun = Sarabun({ 
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'TechCare Solutions - บริการเทคโนโลยีและซ่อมคอมพิวเตอร์',
  description: 'ให้บริการซ่อมคอมพิวเตอร์ ติดตั้งระบบเครือข่าย และให้คำปรึกษาด้านเทคโนโลยี มีทีมช่างมืออาชีพ รับประกันคุณภาพ บริการตลอด 24 ชั่วโมง',
  keywords: ['ซ่อมคอมพิวเตอร์', 'ระบบเครือข่าย', 'เทคโนโลยี', 'ไอที', 'คอมพิวเตอร์', 'เซิร์ฟเวอร์', 'รักษาความปลอดภัย', 'ซ่อมโน้ตบุ๊ค'],
  authors: [{ name: 'TechCare Solutions' }],
  creator: 'TechCare Solutions',
  publisher: 'TechCare Solutions',
  openGraph: {
    title: 'TechCare Solutions - บริการเทคโนโลยีครบวงจร',
    description: 'ผู้เชี่ยวชาญด้านเทคโนโลยี พร้อมให้บริการซ่อมและติดตั้งระบบครบวงจร ด้วยทีมงานมืออาชีพ',
    type: 'website',
    locale: 'th_TH',
    siteName: 'TechCare Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechCare Solutions - บริการเทคโนโลยีครบวงจร',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechCare Solutions',
    description: 'บริการเทคโนโลยีและซ่อมคอมพิวเตอร์',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className={sarabun.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}