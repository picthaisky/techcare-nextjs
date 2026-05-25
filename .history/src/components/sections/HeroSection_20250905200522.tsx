'use client'

import { motion } from 'framer-motion'
import { Phone, Wrench, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { smoothScrollTo } from '@/lib/utils'
import { ANIMATION_CONFIG } from '@/lib/constants'

// สร้างจุด background animation ล่วงหน้าแบบ deterministic
const bgDots = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  width: ((i * 13) % 4) + 1,
  height: ((i * 17) % 4) + 1,
  left: `${((i * 23) % 100)}%`,
  top: `${((i * 31) % 100)}%`,
  duration: ((i * 19) % 3) + 2,
  delay: ((i * 29) % 5),
}))

export default function HeroSection() {
  const handleContactClick = () => {
    smoothScrollTo('#contact')
  }

  const handleServicesClick = () => {
    smoothScrollTo('#services')
  }

  return (
    <section 
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden text-white bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        {bgDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-red"
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
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: ANIMATION_CONFIG.duration.slow,
            ease: 'easeInOut'
          }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="mb-6 text-4xl font-bold leading-tight text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-white to-blue-200 bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: ANIMATION_CONFIG.duration.slow,
              delay: 0.2
            }}
          >
            TechCare Solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="mb-4 text-2xl font-semibold md:text-3xl opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: ANIMATION_CONFIG.duration.slow,
              delay: 0.3
            }}
          >
            บริการเทคโนโลยีครบวงจร
          </motion.h2>
          
          {/* Description */}
          <motion.p
            className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed md:text-2xl opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: ANIMATION_CONFIG.duration.slow,
              ease: 'easeInOut',
              delay: 0.4
            }}
          >
            ซ่อมคอมพิวเตอร์ • ติดตั้งระบบเครือข่าย • กู้ข้อมูล • ให้คำปรึกษาเทคโนโลยี
            <br />
            <span className="block mt-2 text-lg opacity-75 md:text-xl">
              ด้วยทีมงานมืออาชีพ พร้อมให้บริการคุณ 24/7
            </span>
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: ANIMATION_CONFIG.duration.slow,
              ease: 'easeInOut',
              delay: 0.5
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="shadow-2xl min-w-[200px] group"
                onClick={handleContactClick}
              >
                <Phone className="w-5 h-5" />
                ติดต่อเราทันที
                <motion.div
                  className="ml-1"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="secondary" 
                size="lg"
                className="min-w-[200px]"
                onClick={handleServicesClick}
              >
                <Wrench className="w-5 h-5" />
                ดูบริการทั้งหมด
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Quick Preview */}
          <motion.div
            className="grid max-w-4xl grid-cols-2 gap-6 mx-auto mt-16 md:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: ANIMATION_CONFIG.duration.slow,
              ease: 'easeInOut',
              delay: 0.7
            }}
          >
            {[
              { number: '500+', label: 'ลูกค้าที่ไว้วางใจ' },
              { number: '10+', label: 'ปีของประสบการณ์' },
              { number: '24/7', label: 'พร้อมให้บริการ' },
              { number: '98%', label: 'ความพึงพอใจ' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: ANIMATION_CONFIG.duration.normal,
                  ease: 'easeInOut',
                  delay: 0.8 + (index * 0.1)
                }}
              >
                <div className="mb-1 text-2xl font-bold text-yellow-300 md:text-3xl">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="flex justify-center w-6 h-10 border-2 rounded-full border-white/30"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div
            className="w-1 h-3 mt-2 rounded-full bg-white/50"
            animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}