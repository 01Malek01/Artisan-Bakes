'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';
import MobileNav from './MobileNav';

export default function Navbar() {
  return (
    <motion.div 
      className='relative border-b-1 border-gray-400/50 bg-white/80 backdrop-blur-sm z-50'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className='container mx-auto flex flex-row justify-between items-center px-5 py-3'>
        <motion.div 
          className="logo text-2xl font-bold text-black"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Artisan Bakes
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.div 
          className="hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <nav>
            <ul className='flex flex-row justify-between gap-9 items-center'>
              {[
                { href: '/', label: 'Home' },
                { href: '/products', label: 'About' },
                { href: '/services', label: 'Menu' },
                { href: '/about', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map((item, index) => (
                <motion.li 
                  key={item.href}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.4 + (index * 0.1),
                    type: 'spring',
                    stiffness: 300
                  }}
                  whileHover={{ scale: 1.05, color: '#D97706' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href} className='block py-2 transition-colors'>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 300 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  title="Order Now" 
                  bgColor="#ED8C29" 
                  color="black" 
                  styles="cursor-pointer hover:bg-amber-600 transition-colors" 
                />
              </motion.li>
            </ul>
          </nav>
        </motion.div>

        {/* Mobile Navigation Toggle */}
        <motion.div 
          className="lg:hidden z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <MobileNav />
        </motion.div>
      </div>
    </motion.div>
  )
}
