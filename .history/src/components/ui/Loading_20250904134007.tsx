'use client'

import { cn } from '@/lib/utils'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  text?: string
}

export default function Loading({ size = 'md', className, text }: LoadingProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={cn('flex flex-col items-center justify-center space-y-4', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-4 border-gray-200 border-t-blue-500',
          sizes[size]
        )}
      />
      {text && (
        <p className="text-gray-600 animate-pulse">
          {text}<span className="loading-dots"></span>
        </p>
      )}
    </div>
  )
}
