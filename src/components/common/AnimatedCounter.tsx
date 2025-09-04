'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  className?: string
  onComplete?: () => void
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
  className = '',
  onComplete
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      
      const startTime = Date.now() + delay
      const difference = to - from

      const timer = setInterval(() => {
        const now = Date.now()
        const elapsed = now - startTime

        if (elapsed < 0) return

        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        const currentCount = Math.floor(from + difference * easeOutCubic)

        setCount(currentCount)

        if (progress >= 1) {
          setCount(to)
          clearInterval(timer)
          onComplete?.()
        }
      }, 16) // ~60fps

      return () => clearInterval(timer)
    }
  }, [isInView, hasAnimated, from, to, duration, delay, onComplete])

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  )
}

// Alternative hook version for more flexibility
export function useAnimatedCounter({
  from = 0,
  to,
  duration = 2000,
  delay = 0
}: Omit<AnimatedCounterProps, 'suffix' | 'prefix' | 'className' | 'onComplete'>) {
  const [count, setCount] = useState(from)
  const [isActive, setIsActive] = useState(false)

  const startCounter = () => {
    if (isActive) return
    
    setIsActive(true)
    const startTime = Date.now() + delay
    const difference = to - from

    const timer = setInterval(() => {
      const now = Date.now()
      const elapsed = now - startTime

      if (elapsed < 0) return

      const progress = Math.min(elapsed / duration, 1)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(from + difference * easeOutCubic)

      setCount(currentCount)

      if (progress >= 1) {
        setCount(to)
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }

  return { count, startCounter, isActive }
}