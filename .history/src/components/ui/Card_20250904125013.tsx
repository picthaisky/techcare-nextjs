'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends React.ComponentProps<typeof motion.div> {
  variant?: 'default' | 'glass' | 'gradient' | 'bordered'
  size?: 'sm' | 'md' | 'lg'
  hover?: boolean
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    hover = true,
    children, 
    ...props 
  }, ref) => {
    const baseClasses = 'rounded-2xl transition-all duration-300'
    
    const variants = {
      default: 'bg-white shadow-lg border border-gray-100',
      glass: 'bg-white/10 backdrop-blur-lg border border-white/20',
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-400 text-white',
      bordered: 'bg-white border-2 border-blue-500'
    }
    
    const sizes = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    }

    const hoverEffects = hover ? 'hover:shadow-xl hover:-translate-y-1' : ''

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -5 } : undefined}
        transition={{ duration: 0.3 }}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          hoverEffects,
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card