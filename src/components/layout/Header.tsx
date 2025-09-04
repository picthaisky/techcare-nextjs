'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Cpu, Phone } from 'lucide-react'
import Link from 'next/link'
import { MAIN_NAVIGATION, COMPANY_INFO } from '@/lib/constants'
import { smoothScrollTo } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('#')) {
      smoothScrollTo(href)
    }
  }

  const handlePhoneClick = () => {
    window.open(`tel:${COMPANY_INFO.mobile}`, '_self')
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg'
          : 'bg-white/10 backdrop-blur-md border-b border-white/20'
      }`}
    >
      <nav className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="p-2 transition-transform duration-300 shadow-lg bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl group-hover:scale-110"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
            >
              <Cpu className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                TechCare Solutions
              </span>
              <span className={`text-xs font-medium transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-blue-200'
              }`}>
                เทคโนโลยีครบวงจร
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 lg:flex">
            {MAIN_NAVIGATION.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative font-medium transition-all duration-300 hover:text-blue-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } group py-2 px-1`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handlePhoneClick}
                variant={isScrolled ? 'primary' : 'secondary'}
                size="sm"
                className="shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">โทรเลย</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0, 
            opacity: isOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden lg:hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {MAIN_NAVIGATION.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    : 'text-white hover:bg-white/20'
                }`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Mobile CTA */}
            <motion.div
              className="px-4 pt-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: MAIN_NAVIGATION.length * 0.1 }}
            >
              <Button
                onClick={handlePhoneClick}
                variant="primary"
                size="sm"
                className="w-full shadow-lg"
              >
                <Phone className="w-4 h-4" />
                ติดต่อเรา {COMPANY_INFO.mobile}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </nav>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"
        style={{
          scaleX: isScrolled ? 1 : 0,
          transformOrigin: "0%"
        }}
        transition={{ duration: 0.3 }}
      />
    </header>
  )
}