'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_INFO, SERVICES, MAIN_NAVIGATION } from '@/lib/constants'

const socialIconMap = {
  'facebook': '📘',
  'message-circle': '💬',
  'instagram': '📷',
  'youtube': '📺',
}

// Define socialLinks array
const socialLinks = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: socialIconMap['facebook'],
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: socialIconMap['instagram'],
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    icon: socialIconMap['youtube'],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`}} />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              ผู้เชี่ยวชาญด้านเทคโนโลยีสารสนเทศ พร้อมให้บริการครบวงจรด้วยคุณภาพ
              และความน่าเชื่อถือมากกว่า 10 ปี
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors duration-300">
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="mx-2">|</span>
                  <a href={`tel:${COMPANY_INFO.mobile}`} className="hover:text-white transition-colors duration-300">
                    {COMPANY_INFO.mobile}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm hover:text-white transition-colors duration-300"
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
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">เมนูหลัก</h4>
            <ul className="space-y-2">
              {MAIN_NAVIGATION.map((item: { name: string; href: string }) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm block"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">บริการหลัก</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm block text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              {SERVICES.length > 4 && (
                <li>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    ดูบริการทั้งหมด →
                  </button>
                </li>
              )}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">ติดตามเรา:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}