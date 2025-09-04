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
  CheckCircle,
  AlertCircle,
  Loader2 
} from 'lucide-react'
import { COMPANY_INFO, SERVICES, ANIMATION_CONFIG } from '@/lib/constants'
import { ContactForm } from '@/lib/types'
import { formatPhone, formatEmail, staggerDelay } from '@/lib/utils'
import Button from '@/components/ui/Button'

// Schema validation
const contactSchema = z.object({
  name: z.string().min(2, 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร'),
  email: z.string().email('รูปแบบอีเมลไม่ถูกต้อง'),
  phone: z.string().min(9, 'เบอร์โทรศัพท์ไม่ถูกต้อง').optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'ข้อความต้องมีอย่างน้อย 10 ตัวอักษร')
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Format data before sending
      const formattedData = {
        ...data,
        phone: data.phone ? formatPhone(data.phone) : undefined,
        email: formatEmail(data.email)
      }

      console.log('Form submitted:', formattedData)
      
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'ที่อยู่',
      content: COMPANY_INFO.address,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'โทรศัพท์',
      content: `${COMPANY_INFO.phone}\n${COMPANY_INFO.mobile}`,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'อีเมล',
      content: COMPANY_INFO.email,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'เวลาทำการ',
      content: COMPANY_INFO.workingHours,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100'
    }
  ]

  return (
    <section 
      id="contact" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20zM60 60h20v20H60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
            initial={{ scale: 0, rotate: 180 }}
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
            <Mail className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            ติดต่อเรา
          </h2>
          
          <motion.div
            className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            พร้อมให้บริการและตอบคำถามของคุณตลอด 24 ชั่วโมง
            <br />
            ติดต่อเราผ่านช่องทางที่สะดวกที่สุดสำหรับคุณ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.duration.slow }}
            className="space-y-6"
          >
            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              ข้อมูลติดต่อ
            </h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: staggerDelay(index, 0.1)
                }}
                whileHover={{ x: 5 }}
                className="flex items-start p-6 space-x-4 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl group"
              >
                <motion.div
                  className={`flex-shrink-0 w-12 h-12 ${info.bgColor} rounded-2xl flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {info.icon}
                </motion.div>
                <div className="flex-1">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {info.title}
                  </h4>
                  <p className="leading-relaxed text-gray-600 whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Quick Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-white border border-gray-100 shadow-lg rounded-2xl"
            >
              <h4 className="mb-4 text-lg font-semibold text-gray-900">
                ติดต่อด่วน
              </h4>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={`tel:${COMPANY_INFO.phone}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 text-white transition-colors bg-green-500 rounded-full hover:bg-green-600"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  โทรเลย
                </motion.a>
                <motion.a
                  href={`mailto:${COMPANY_INFO.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  ส่งอีเมล
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.duration.slow }}
          >
            <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                ส่งข้อความหาเรา
              </h3>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 mb-6 text-green-800 border border-green-200 rounded-lg bg-green-50"
                >
                  <CheckCircle className="flex-shrink-0 w-5 h-5 mr-2" />
                  <span>ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับในเร็วๆ นี้</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 mb-6 text-red-800 border border-red-200 rounded-lg bg-red-50"
                >
                  <AlertCircle className="flex-shrink-0 w-5 h-5 mr-2" />
                  <span>เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    ชื่อ-นามสกุล *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="กรุณาระบุชื่อ-นามสกุล"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    อีเมล *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    เบอร์โทรศัพท์
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.phone 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="089-xxx-xxxx"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    บริการที่สนใจ
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    {...register('service')}
                    className="w-full px-4 py-3 transition-colors bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">กรุณาเลือกบริการ</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </motion.select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    ข้อความ *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    {...register('message')}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      errors.message 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="กรุณาระบุรายละเอียดปัญหาหรือความต้องการของคุณ..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        กำลังส่ง...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        ส่งข้อความ
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>

              {/* Additional Info */}
              <div className="pt-6 mt-6 border-t border-gray-200">
                <p className="text-sm text-center text-gray-600">
                  เราจะติดต่อกลับภายใน 24 ชั่วโมง หรือโทร{' '}
                  <a 
                    href={`tel:${COMPANY_INFO.mobile}`}
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    {COMPANY_INFO.mobile}
                  </a>{' '}
                  เพื่อติดต่อด่วน
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_CONFIG.duration.slow, delay: 0.3 }}
          className="mt-16"
        >
          <div className="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
            <h3 className="mb-6 text-2xl font-bold text-center text-gray-900">
              แผนที่และเส้นทาง
            </h3>
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-xl">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="text-lg font-semibold">แผนที่จะแสดงที่นี่</p>
                <p className="text-sm">หรือใช้ Google Maps ค้นหา: {COMPANY_INFO.address}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}