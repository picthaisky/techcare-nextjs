'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  showLine?: boolean
  lineClassName?: string
}

export default function SectionTitle({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  showLine = true,
  lineClassName
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn('text-center mb-16', className)}
    >
      <h2 className={cn(
        'text-4xl md:text-5xl font-bold mb-6',
        titleClassName
      )}>
        {title}
      </h2>
      
      {showLine && (
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={cn(
            'h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full',
            lineClassName
          )}
        />
      )}
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={cn(
            'text-xl max-w-3xl mx-auto leading-relaxed',
            subtitleClassName
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}