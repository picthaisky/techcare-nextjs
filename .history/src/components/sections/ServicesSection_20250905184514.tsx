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
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 hover:border-blue-200 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
          <div className="text-8xl select-none">{service.icon}</div>
        </div>

        {/* Service Icon */}
        <div className="relative z-10 mb-6">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl text-white text-2xl shadow-lg group-hover:shadow-xl"
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
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
            {service.description}
          </p>

          {/* Service Features */}
          <div className="space-y-2 mb-6">
            {getServiceFeatures(service.id).map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-center text-sm text-gray-500"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Learn More Button */}
          <motion.button
            onClick={() => smoothScrollTo('#contact')}
            className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
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
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
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

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_CONFIG.duration.slow }}
          className="text-center mb-16"
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl mb-6 shadow-lg"
          >
            <span className="text-2xl text-white">🛠️</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            บริการของเรา
          </h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            เราให้บริการด้านเทคโนโลยีแบบครบวงจรด้วยทีมงานมืออาชีพ
            <br />
            พร้อมดูแลคุณด้วยความใส่ใจในทุกรายละเอียด
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ทำไมต้องเลือกเรา?
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl mb-4 text-2xl border border-blue-100"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {reason.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
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
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            ต้องการคำปรึกษาเพิ่มเติมหรือต้องการใช้บริการ?
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScrollTo('#contact')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
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