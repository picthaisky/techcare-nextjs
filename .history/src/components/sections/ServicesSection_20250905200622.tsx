'use client'

import { motion } from 'framer-motion'
import { SERVICES, ANIMATION_CONFIG } from '@/lib/constants'
import { Service } from '@/lib/types'
import { smoothScrollTo, staggerDelay } from '@/lib/utils'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ServiceCardProps {
  service: Service
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: ANIMATION_CONFIG.duration.normal,
        delay: staggerDelay(index)
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      <div className="relative h-full p-8 overflow-hidden transition-all duration-500 border border-gray-100 shadow-lg bg-red rounded-2xl hover:shadow-2xl hover:border-blue-200">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 transition-opacity opacity-5 group-hover:opacity-10">
          <div className="select-none text-8xl">{service.icon}</div>
        </div>

        {/* Service Icon */}
        <div className="relative z-10 mb-6">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 text-2xl text-white shadow-lg bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl group-hover:shadow-xl"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0]
            }}
            transition={{ duration: 0.3 }}
          >
            {service.icon}
          </motion.div>
        </div>

        {/* Service Content */}
        <div className="relative z-10">
          <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
            {service.title}
          </h3>
          
          <p className="mb-6 leading-relaxed text-gray-600 line-clamp-3">
            {service.description}
          </p>

          {/* Service Features */}
          <div className="mb-6 space-y-2">
            {getServiceFeatures(service.id).map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-center text-sm text-gray-500"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <CheckCircle className="flex-shrink-0 w-4 h-4 mr-2 text-green-500" />
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Learn More Button */}
          <motion.button
            onClick={() => smoothScrollTo('#contact')}
            className="inline-flex items-center font-semibold text-blue-600 transition-colors group-hover:text-blue-700"
            whileHover={{ x: 5 }}
          >
            สอบถามเพิ่มเติม
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// ฟีเจอร์ของแต่ละบริการ
function getServiceFeatures(serviceId: string): string[] {
  const features: Record<string, string[]> = {
    'computer-repair': [
      'ซ่อมทั้งฮาร์ดแวร์และซอฟต์แวร์',
      'รับประกันการซ่อม 6 เดือน',
      'บริการถึงที่ในกรุงเทพฯ'
    ],
    'network-setup': [
      'ออกแบบระบบตามความต้องการ',
      'รองรับอุปกรณ์ทุกยี่ห้อ',
      'มีการ monitoring 24/7'
    ],
    'software-install': [
      'ซอฟต์แวร์ลิขสิทธิ์แท้ 100%',
      'อัปเดตและ patch ความปลอดภัย',
      'สอนการใช้งานเบื้องต้น'
    ],
    'data-recovery': [
      'กู้ข้อมูลได้สูงสุด 95%',
      'รองรับทุกประเภทไฟล์',
      'ไม่เก็บค่าบริการหากกู้ไม่ได้'
    ],
    'security-system': [
      'ระบบป้องกันล่าสุด',
      'สำรองข้อมูลอัตโนมัติ',
      'รายงานความปลอดภัยรายเดือน'
    ],
    'consultation': [
      'วิเคราะห์ฟรีก่อนเริ่มโปรเจค',
      'แผนการอัปเกรดระยะยาว',
      'รับประกันผลลัพธ์ตามข้อตกลง'
    ]
  }
  return features[serviceId] || []
}

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container relative px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_CONFIG.duration.slow }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 150
            }}
            className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl"
          >
            <span className="text-2xl text-white">🛠️</span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            บริการของเรา
          </h2>
          
          <motion.div
            className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            เราให้บริการด้านเทคโนโลยีแบบครบวงจรด้วยทีมงานมืออาชีพ
            <br />
            พร้อมดูแลคุณด้วยความใส่ใจในทุกรายละเอียด
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_CONFIG.duration.slow }}
          className="p-8 bg-white border border-gray-100 shadow-xl rounded-3xl md:p-12"
        >
          <div className="mb-10 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              ทำไมต้องเลือกเรา?
            </h3>
            <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '⚡',
                title: 'รวดเร็ว',
                description: 'ตอบสนองทันที ไม่เสียเวลารอคอย'
              },
              {
                icon: '🔧',
                title: 'มืออาชีพ',
                description: 'ทีมงานผ่านการรับรองมาตรฐาน'
              },
              {
                icon: '💯',
                title: 'คุณภาพ',
                description: 'รับประกันผลงาน พร้อม After Service'
              },
              {
                icon: '💰',
                title: 'ราคาดี',
                description: 'ราคาเป็นกันเอง คุ้มค่าที่สุด'
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 text-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {reason.icon}
                </motion.div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  {reason.title}
                </h4>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_CONFIG.duration.slow, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-8 text-lg text-gray-600">
            ต้องการคำปรึกษาเพิ่มเติมหรือต้องการใช้บริการ?
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScrollTo('#contact')}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-xl group"
          >
            ติดต่อเราเลย
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}