import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'

// export default function HomePage() {
//   return (
//     <>
//       <HeroSection />
//       <ServicesSection />
//       <AboutSection />
//       <ContactSection />
//     </>
//   )
// }

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-8">
            TechCare Solutions
          </h1>
          <p className="text-2xl mb-8">
            ทดสอบระบบ - ถ้าเห็นข้อความนี้แสดงว่า Tailwind ทำงานแล้ว
          </p>
          <div className="bg-white text-black p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              ระบบทำงานปกติ ✅
            </h2>
            <p className="text-lg">
              หากเห็นหน้านี้แสดงว่า Next.js และ Tailwind CSS ทำงานถูกต้องแล้ว
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}