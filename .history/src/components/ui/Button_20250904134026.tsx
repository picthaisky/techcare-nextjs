'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed btn-hover-effect focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
    
    const variants = {
      primary: 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg hover:shadow-xl hover:-translate-y-1',
      secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900',
      outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
      ghost: 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          disabled && 'hover:translate-y-0 hover:shadow-lg',
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button