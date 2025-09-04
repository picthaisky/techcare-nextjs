'use client'

import { motion } from 'framer-motion'
import { 
  Laptop, 
  Network, 
  Server, 
  Shield, 
  Smartphone, 
  Headphones,
  LucideIcon
} from 'lucide-react'
import { SERVICES } from '@/lib/constants'

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  'laptop-medical': Laptop,
  'network-wired': Network,
  'server': Server,
  'shield-alt': Shield,
  'mobile-alt': Smartphone,
  'headset': Headphones,
}

interface ServiceCardProps {
  service: typeof SERVICES[0]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Laptop

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shine Effect */}
      <div className="absolute -top-full -left-full w-full h-full bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-700" />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl shadow-lg"
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>

        {/* Hover indicator */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
        />
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            บริการของเรา
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            เราให้บริการด้านเทคโนโลยีแบบครบวงจรด้วยทีมงานมืออาชีพ
            พร้อมดูแลคุณด้วยความใส่ใจในทุกรายละเอียด
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            ต้องการคำปรึกษาเพิ่มเติมหรือต้องการใช้บริการ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.querySelector('#contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            ติดต่อเราเลย
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}