'use client'

import { motion } from 'framer-motion'
import { Phone, Wrench } from 'lucide-react'
import Button from '@/components/ui/Button'

// สร้างจุด background animation ล่วงหน้าแบบ deterministic
const bgDots = Array.from({ length: 50 }, (_, i) => ({
  width: ((i * 13) % 4) + 1,
  height: ((i * 17) % 4) + 1,
  left: `${((i * 23) % 100)}%`,
  top: `${((i * 31) % 100)}%`,
  duration: ((i * 19) % 3) + 2,
  delay: ((i * 29) % 5),
}))

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        {bgDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: dot.width,
              height: dot.height,
              left: dot.left,
              top: dot.top,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            บริการเทคโนโลยีครบวงจร
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ซ่อมคอมพิวเตอร์ • ติดตั้งระบบ • ให้คำปรึกษาเทคโนโลยี
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="shadow-2xl">
              <Phone className="w-5 h-5" />
              ติดต่อเรา
            </Button>
            <Button variant="secondary" size="lg">
              <Wrench className="w-5 h-5" />
              ดูบริการ
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}