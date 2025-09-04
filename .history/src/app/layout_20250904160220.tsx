import type { Metadata } from 'next'
import { Inter, Sarabun } from 'next/font/google'
import './globals.css'
import { SEO_DATA } from '@/lib/constants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const sarabun = Sarabun({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai'],
  display: 'swap',
  variable: '--font-sarabun'
})

export const metadata: Metadata = {
  title: SEO_DATA.title,
  description: SEO_DATA.description,
  keywords: SEO_DATA.keywords,
  authors: [{ name: SEO_DATA.author }],
  creator: SEO_DATA.author,
  publisher: SEO_DATA.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://techcare.co.th'),
  alternates: {
    canonical: '/',
    languages: {
      'th-TH': '/th',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: SEO_DATA.title,
    description: SEO_DATA.description,
    url: 'https://techcare.co.th',
    siteName: 'TechCare Solutions',
    images: [
      {
        url: SEO_DATA.image,
        width: 1200,
        height: 630,
        alt: SEO_DATA.title,
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_DATA.title,
    description: SEO_DATA.description,
    images: [SEO_DATA.image],
    creator: '@techcare_th',
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
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className={`${inter.variable} ${sarabun.variable}`}>
      <head>
        {/* Preload critical resources (fonts provided via next/font) */}
        
        {/* Prefetch DNS */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Theme and mobile optimization */}
        <meta name="theme-color" content="#4F46E5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TechCare Solutions",
              "description": SEO_DATA.description,
              "url": "https://techcare.co.th",
              "telephone": "+66-2-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 เทคโนโลยี แขวงบางซื่อ",
                "addressLocality": "เขตบางซื่อ",
                "addressRegion": "กรุงเทพมหานคร",
                "postalCode": "10800",
                "addressCountry": "TH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "13.7563",
                "longitude": "100.5018"
              },
              "openingHours": "Mo-Fr 08:30-17:30",
              "image": SEO_DATA.image,
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "13.7563",
                  "longitude": "100.5018"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Computer Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Computer Repair",
                      "description": "ซ่อมคอมพิวเตอร์ทุกยี่ห้อ"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Network Setup",
                      "description": "ติดตั้งระบบเครือข่าย"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className="antialiased text-gray-900 bg-white font-thai">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="z-50 px-4 py-2 text-white bg-blue-600 rounded-md sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
        >
          ข้ามไปเนื้อหา
        </a>
        
        {/* Main Layout */}
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          
          <Footer />
        </div>

        {/* Loading Indicator */}
        <div id="loading-indicator" className="fixed inset-0 z-50 flex items-center justify-center hidden bg-white/80 backdrop-blur-sm">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-b-2 border-blue-600 rounded-full animate-spin"></div>
            <p className="mt-2 text-gray-600">กำลังโหลด...</p>
          </div>
        </div>

        {/* Analytics Scripts - Add your tracking codes here */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID');
                `,
              }}
            />
            
            {/* Facebook Pixel */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', 'FACEBOOK_PIXEL_ID');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=FACEBOOK_PIXEL_ID&ev=PageView&noscript=1"
                alt=""
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  )
}
