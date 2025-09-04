'use client'

import { motion } from 'framer-motion'
import { Users, Award, Clock, CheckCircle, Target, Heart } from 'lucide-react'
import { STATS } from '@/lib/constants'
import SectionTitle from '@/components/common/SectionTitle'

interface StatCardProps {
  stat: {
    icon: React.ReactNode
    number: string
    label: string
    description: string
  }
  index: number
}

function StatCard({ stat, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>
      <h3 className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {stat.number}
      </h3>
      <h4 className="text-lg font-semibold text-gray-700 mb-3">{stat.label}</h4>
      <p className="text-gray-600 leading-relaxed">{stat.description}</p>
    </motion.div>
  )
}

export default function AboutSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: `${STATS.customers.toLocaleString()}+`,
      label: 'ลูกค้าที่พึงพอใจ',
      description: 'ได้รับความไว้วางใจจากลูกค้ามากกว่า 1,000 ราย'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: `${STATS.experience}+`,
      label: 'ปีประสบการณ์',
      description: 'ความเชี่ยวชาญด้านเทคโนโลยีมากกว่า 10 ปี'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: STATS.availability,
      label: 'บริการตลอดเวลา',
      description: 'พร้อมให้บริการและแก้ไขปัญหาฉุกเฉิน'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      number: `${STATS.quality}%`,
      label: 'รับประกันคุณภาพ',
      description: 'มั่นใจในคุณภาพงานและบริการของเรา'
    }
  ]

  const features = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: 'ความเชี่ยวชาญ',
      description: 'ทีมงานมืออาชีพที่มีประสบการณ์สูงในด้านเทคโนโลยี'
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: 'ใส่ใจลูกค้า',
      description: 'ให้ความสำคัญกับความต้องการและความพึงพอใจของลูกค้า'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'คุณภาพสูง',
      description: 'ใช้อะไหล่แท้และรับประกันคุณภาพการซ่อมทุกครั้ง'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="เกี่ยวกับเรา"
          subtitle="ผู้เชี่ยวชาญด้านเทคโนโลยีที่คุณไว้วางใจได้"
          titleClassName="text-gray-900"
          subtitleClassName="text-gray-600"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                TechCare Solutions
              </h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  เราคือบริษัทผู้เชี่ยวชาญด้านเทคโนโลยีสารสนเทศที่มีประสบการณ์มากกว่า 10 ปี 
                  ในการให้บริการซ่อมและติดตั้งระบบคอมพิวเตอร์
                </p>
                <p>
                  ด้วยทีมงานมืออาชีพและเครื่องมือที่ทันสมัย เราพร้อมให้บริการลูกค้าทั้งรายบุคคล
                  และองค์กรด้วยความใส่ใจในทุกรายละเอียด
                </p>
                <p>
                  เราเชื่อว่าเทคโนโลยีควรทำให้ชีวิตง่ายขึ้น ไม่ใช่ยุ่งยากซับซ้อน 
                  นั่นคือเหตุผลที่เรามุ่งมั่นให้บริการที่เข้าใจง่ายและแก้ปัญหาได้จริง
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;40&quot; height=&quot;40&quot; viewBox=&quot;0 0 40 40&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.3&quot;%3E%3Cpath d=&quot;M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z&quot;/&gt;%3C/g%3E%3C/svg%3E')]" />
              </div>
              
              {/* Tech Icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-8 p-8">
                  {[
                    { icon: <Users className="w-12 h-12" />, delay: 0 },
                    { icon: <Target className="w-12 h-12" />, delay: 0.2 },
                    { icon: <Award className="w-12 h-12" />, delay: 0.4 },
                    { icon: <Heart className="w-12 h-12" />, delay: 0.6 },
                    { icon: <CheckCircle className="w-12 h-12" />, delay: 0.8 },
                    { icon: <Clock className="w-12 h-12" />, delay: 1 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: item.delay }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-400 rounded-full opacity-20"
            />
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
