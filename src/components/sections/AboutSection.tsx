'use client'

import { motion } from 'framer-motion'
import { COMPANY_STATS, ANIMATION_CONFIG } from '@/lib/constants'
import { formatNumber, staggerDelay } from '@/lib/utils'
import { Users, Clock, Award, TrendingUp, Target, Shield, Heart, Zap } from 'lucide-react'

const aboutFeatures = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'วิสัยทัศน์',
    description: 'เป็นผู้นำด้านการบริการเทคโนโลยีที่ลูกค้าไว้วางใจ พร้อมสร้างสรรค์นวัตกรรมใหม่ๆ'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'ภารกิจ',
    description: 'มุ่งมั่นพัฒนาและให้บริการด้านเทคโนโลยีอย่างครบวงจร ด้วยคุณภาพที่เป็นเลิศ'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'ค่านิยม',
    description: 'ใส่ใจลูกค้าเป็นอันดับหนึ่ง พัฒนาอย่างต่อเนื่อง และรักษามาตรฐานสูงสุด'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'นวัตกรรม',
    description: 'นำเทคโนโลยีใหม่ล่าสุดมาใช้ เพื่อให้บริการที่ดีที่สุดแก่ลูกค้า'
  }
]

const teamMembers = [
  {
    name: 'คุณสมชาย จันทร์เพ็ญ',
    position: 'ผู้อำนวยการ',
    experience: '15+ ปี',
    specialty: 'ระบบเครือข่าย & การจัดการ'
  },
  {
    name: 'คุณสมหญิง วงศ์ใหญ่',
    position: 'หัวหน้าช่างเทคนิค',
    experience: '12+ ปี',
    specialty: 'ซ่อมฮาร์ดแวร์ & กู้ข้อมูล'
  },
  {
    name: 'คุณวิทยา นักพัฒนา',
    position: 'ที่ปรึกษาระบบ',
    experience: '10+ ปี',
    specialty: 'ระบบรักษาความปลอดภัย'
  },
  {
    name: 'คุณปิยะดา เทคโนโลยี',
    position: 'ฝ่ายบริการลูกค้า',
    experience: '8+ ปี',
    specialty: 'ประสานงาน & สนับสนุน'
  }
]

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative py-20 overflow-hidden bg-white"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 -translate-x-48 -translate-y-48 rounded-full opacity-50 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-50" />
      <div className="absolute bottom-0 right-0 translate-x-40 translate-y-40 rounded-full opacity-50 w-80 h-80 bg-gradient-to-tl from-purple-100 to-blue-50" />

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
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 120
            }}
            className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl"
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            เกี่ยวกับเรา
          </h2>
          
          <motion.div
            className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 gap-12 mb-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.duration.slow }}
          >
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              เรื่องราวของเรา
            </h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                <span className="font-semibold text-blue-600">TechCare Solutions</span> ก่อตั้งขึ้นในปี 2014 
                ด้วยความมุ่งมั่นที่จะให้บริการด้านเทคโนโลยีที่มีคุณภาพและเข้าถึงได้ง่าย
              </p>
              <p>
                เราเริ่มต้นจากทีมงานเล็กๆ ที่มีความหลงใหลในเทคโนโลยี และต้องการแบ่งปัน
                ความรู้ความสามารถเพื่อช่วยเหลือผู้คนในการแก้ไขปัญหาด้านคอมพิวเตอร์และเทคโนโลยี
              </p>
              <p>
                วันนี้ เราได้เติบโตขึ้นเป็นบริษัทที่มีทีมงานมืออาชีพกว่า 15 คน 
                พร้อมให้บริการลูกค้าทั่วประเทศไทยด้วยความใส่ใจและคุณภาพที่ยอดเยียม
              </p>
            </div>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.duration.slow }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Users className="w-8 h-8" />,
                number: `${formatNumber(COMPANY_STATS.customers)}+`,
                label: 'ลูกค้าที่ไว้วางใจ',
                color: 'text-blue-600'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                number: `${COMPANY_STATS.experience}+`,
                label: 'ปีของประสบการณ์',
                color: 'text-green-600'
              },
              {
                icon: <Award className="w-8 h-8" />,
                number: `${COMPANY_STATS.quality}%`,
                label: 'ความพึงพอใจ',
                color: 'text-purple-600'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                number: COMPANY_STATS.availability,
                label: 'พร้อมให้บริการ',
                color: 'text-cyan-600'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: staggerDelay(index, 0.1)
                }}
                whileHover={{ scale: 1.05 }}
                className="p-6 text-center transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${stat.color} bg-opacity-10`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
                <div className="mb-2 text-3xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_CONFIG.duration.slow }}
          className="mb-20"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              หลักการทำงานของเรา
            </h3>
            <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aboutFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: staggerDelay(index, 0.1)
                }}
                whileHover={{ y: -5 }}
                className="p-6 text-center transition-all duration-300 border border-gray-100 shadow-lg bg-gradient-to-br from-white to-gray-50 rounded-2xl hover:shadow-xl group"
              >
                <motion.div
                  className="inline-flex items-center justify-center mb-4 text-white transition-transform w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl group-hover:scale-110"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h4 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {feature.title}
                </h4>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_CONFIG.duration.slow }}
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              ทีมงานมืออาชีพ
            </h3>
            <div className="w-20 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              ทีมงานของเราประกอบด้วยผู้เชี่ยวชาญด้านต่างๆ ที่มีประสบการณ์และความเชี่ยวชาญสูง
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: staggerDelay(index, 0.1)
                }}
                whileHover={{ y: -8 }}
                className="p-6 text-center transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl group"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 text-2xl font-bold text-white transition-transform rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 group-hover:scale-110">
                  {member.name.charAt(2)}
                </div>
                <h4 className="mb-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {member.name}
                </h4>
                <div className="mb-2 font-semibold text-blue-600">
                  {member.position}
                </div>
                <div className="mb-2 text-sm text-gray-500">
                  ประสบการณ์: {member.experience}
                </div>
                <div className="text-sm leading-relaxed text-gray-600">
                  {member.specialty}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}