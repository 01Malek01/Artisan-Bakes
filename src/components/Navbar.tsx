'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';
import MobileNav from './MobileNav';
import LanguageSwitcher from './LanguageSwitcher';
import { useNavbar } from '@/app/context/NavbarContext';
import { useLanguage } from '@/app/context/LanguageContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { activeTab, setActiveTab } = useNavbar();
  const { t } = useLanguage();
  const pathname = usePathname();
  
  // Set active tab based on current path when component mounts
  useEffect(() => {
    const currentPath = pathname === '/' ? 'Home' : pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1);
    setActiveTab(currentPath);
  }, [pathname, setActiveTab]);
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
          {t('brand.name')}
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
                { href: '/', label: 'Home', translationKey: 'nav.home' },
                { href: '/menu', label: 'Menu', translationKey: 'nav.menu' },
                { href: '/about', label: 'About', translationKey: 'nav.about' },
                { href: '/gallery', label: 'Gallery', translationKey: 'nav.gallery' },
                { href: '/contact', label: 'Contact', translationKey: 'nav.contact' },
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
                  <Link 
                    href={item.href} 
                    className={`block py-2 transition-colors ${activeTab === item.label ? 'text-amber-600 font-semibold' : ''}`}
                    onClick={() => setActiveTab(item.label)}
                  >
                    {t(item.translationKey)}
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
                <Link href="/signup">
                <Button 
                  title={t('nav.orderNow')} 
                  bgColor="#ED8C29" 
                  color="black" 
                  styles="cursor-pointer hover:bg-amber-600 transition-colors" 
                  />
                  </Link>
              </motion.li>
            </ul>
          </nav>
        </motion.div>

        {/* Language Switcher */}
        <motion.div
          className="hidden lg:flex items-center mr-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <LanguageSwitcher />
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
