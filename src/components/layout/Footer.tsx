'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Heart, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_INFO, SERVICES, MAIN_NAVIGATION, SOCIAL_LINKS } from '@/lib/constants'
import { smoothScrollTo, staggerDelay } from '@/lib/utils'

const socialIconMap = {
  'facebook': '📘',
  'message-circle': '💬',
  'instagram': '📷',
  'youtube': '📺',
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      smoothScrollTo(href)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }} 
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                เราคือผู้เชี่ยวชาญด้านเทคโนโลยีที่พร้อมดูแลระบบคอมพิวเตอร์และเครือข่าย
                ของคุณด้วยบริการที่เป็นเลิศ
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-sm">
                  <div>{COMPANY_INFO.phone}</div>
                  <div>{COMPANY_INFO.mobile}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: staggerDelay(1) }}
          >
            <h4 className="text-lg font-semibold mb-6 text-blue-400">เมนูหลัก</h4>
            <ul className="space-y-3">
              {MAIN_NAVIGATION.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: staggerDelay(2) }}
          >
            <h4 className="text-lg font-semibold mb-6 text-blue-400">บริการหลัก</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 4).map((service, index) => (
                <motion.li 
                  key={service.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="text-base mr-2">{service.icon}</span>
                    {service.title}
                  </button>
                </motion.li>
              ))}
            </ul>
            <motion.button
              onClick={() => handleNavClick('#services')}
              className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors flex items-center group"
              whileHover={{ x: 5 }}
            >
              ดูบริการทั้งหมด
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: staggerDelay(3) }}
          >
            <h4 className="text-lg font-semibold mb-6 text-blue-400">ติดตามเรา</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {socialIconMap[social.icon as keyof typeof socialIconMap]}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <h5 className="font-semibold mb-2 text-white">รับข่าวสาร</h5>
              <p className="text-sm text-gray-400 mb-3">
                รับข้อมูลข่าวสารและเทคนิคเทคโนโลยีใหม่ๆ
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="อีเมลของคุณ"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">
                © {currentYear} {COMPANY_INFO.name}. สงวนลิขสิทธิ์
              </span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            </div>

            <div className="flex items-center space-x-6">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                เงื่อนไขการใช้งาน
              </Link>
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-500">
            พัฒนาด้วย ❤️ โดยทีม {COMPANY_INFO.name} | 
            ใช้เทคโนโลยี Next.js, TypeScript และ Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}