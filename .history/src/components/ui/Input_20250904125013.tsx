'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'glass' | 'bordered'
  inputSize?: 'sm' | 'md' | 'lg'
  error?: boolean
  label?: string
  helperText?: string
  errorText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    variant = 'default',
    inputSize = 'md',
    error = false,
    label,
    helperText,
    errorText,
    type = 'text',
    ...props 
  }, ref) => {
    const baseClasses = 'w-full rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      default: 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500',
      glass: 'bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm',
      bordered: 'bg-transparent border-2 border-blue-500 text-gray-900 placeholder-gray-500'
    }
    
    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg'
    }

    const errorClasses = error ? 'border-red-500 focus:ring-red-400' : ''

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-gray-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <input
          type={type}
          ref={ref}
          className={cn(
            baseClasses,
            variants[variant],
            sizes[inputSize],
            errorClasses,
            className
          )}
          {...props}
        />
        
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
        
        {error && errorText && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errorText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input