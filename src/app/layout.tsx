import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SENIC Solution | ซ่อมคอมพิวเตอร์ โน้ตบุ๊ก และดูแลระบบ IT',
  description: 'SENIC Solution บริการซ่อมและอัปเกรดคอมพิวเตอร์ โน้ตบุ๊ก ดูแลระบบ IT สำหรับธุรกิจ ในพื้นที่บางพระ บางแสน และศรีราชา สอบถามรายละเอียดผ่านเพจร้าน',
  applicationName: 'SENIC Solution',
  openGraph: {
    title: 'SENIC Solution',
    description: 'บริการซ่อมคอมพิวเตอร์ โน้ตบุ๊ก และโซลูชัน IT สำหรับธุรกิจ',
    type: 'website',
    locale: 'th_TH',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>
}
