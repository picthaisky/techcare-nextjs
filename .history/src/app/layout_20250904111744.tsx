import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechCare Solutions - บริการเทคโนโลยีและซ่อมคอมพิวเตอร์",
  description: "ให้บริการซ่อมคอมพิวเตอร์ ติดตั้งระบบเครือข่าย และให้คำปรึกษาด้านเทคโนโลยี",
  keywords: 'ซ่อมคอมพิวเตอร์, ระบบเครือข่าย, เทคโนโลยี, ไอที',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
