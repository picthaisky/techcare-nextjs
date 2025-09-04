'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle,
  Facebook,
  MessageCircle,
  Instagram,
  Youtube
} from 'lucide-react'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร'),
  email: z.string().email('รูปแบบอีเมลไม่ถูกต้อง'),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'ข้อความต้องมีอย่างน้อย 10 ตัวอักษร')
})

type ContactForm = z.infer<typeof contactSchema>

interface ContactInfoItemProps {
  icon: React.ReactNode
  title: string
  content: string | React.ReactNode
  index: number
}

function ContactInfoItem({ icon, title, content, index }: ContactInfoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white mb-2">{title}</h4>
        <div className="text-blue-100">{content}</div>
      </div>
    </motion.div>
  )
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', data)
      setIsSubmitted(true)
      reset()
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      title: 'ที่อยู่',
      content: COMPANY_INFO.address
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      title: 'โทรศัพท์',
      content: (
        <div>
          <div>{COMPANY_INFO.phone}</div>
          <div>{COMPANY_INFO.mobile}</div>
        </div>
      )
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: 'อีเมล',
      content: COMPANY_INFO.email
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: 'เวลาทำการ',
      content: (
        <div>
          <div>จันทร์-เสาร์ 8:00-18:00</div>
          <div>อาทิตย์ 9:00-17:00</div>
        </div>
      )
    }
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <MessageCircle className="w-5 h-5" />, href: '#', label: 'Line' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ติดต่อเรา
          </h2>
          <div className="w-24 h-1 bg-white/50 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            พร้อมให้บริการและตอบคำถามทุกข้อสงสัย
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-white mb-8"
            >
              ข้อมูลการติดต่อ
            </motion.h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <ContactInfoItem
                  key={index}
                  {...item}
                  index={index}
                />
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold text-white mb-4">ติดตามเรา</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-8">ส่งข้อความหาเรา</h3>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-2xl flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-green-100">ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับโดยเร็วที่สุด</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-white font-medium mb-2">
                  ชื่อ-นามสกุล *
                </label>
                <input
                  {...register('name')}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="กรุณากรอกชื่อ-นามสกุล"
                />
                {errors.name && (
                  <p className="mt-1 text-red-300 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white font-medium mb-2">
                  อีเมล *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-300 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-white font-medium mb-2">
                  เบอร์โทรศัพท์
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="08x-xxx-xxxx"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-white font-medium mb-2">
                  บริการที่สนใจ
                </label>
                <select
                  {...register('service')}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">เลือกบริการ</option>
                  {SERVICES.map(service => (
                    <option key={service.id} value={service.id} className="bg-gray-800">
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-white font-medium mb-2">
                  ข้อความ *
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="บอกเราเกี่ยวกับปัญหาหรือความต้องการของคุณ..."
                />
                {errors.message && (
                  <p className="mt-1 text-red-300 text-sm">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>กำลังส่ง...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>ส่งข้อความ</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}