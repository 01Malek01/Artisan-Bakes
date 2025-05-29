'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';
import { useNavbar } from '@/app/context/NavbarContext';
import { useLanguage } from '@/app/context/LanguageContext';

const menuVariants = {
  hidden: { 
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren"
    }
  },
  show: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  }
};

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeTab, setActiveTab } = useNavbar();
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      {/* Mobile menu button */}
      <motion.button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-gray-900 focus:outline-none p-2 -mr-2"
        aria-label="Toggle menu"
        whileTap={{ scale: 0.95 }}
      >
        {!isOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute left-0 right-0 top-16 z-50 bg-white/95 backdrop-blur-sm shadow-lg "
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.nav className="px-4 py-3 space-y-1">
              {[
                 { href: '/', label: 'Home', translationKey: 'nav.home' },
                 { href: '/menu', label: 'Menu', translationKey: 'nav.menu' },
                 { href: '/about', label: 'About', translationKey: 'nav.about' },
                 { href: '/gallery', label: 'Gallery', translationKey: 'nav.gallery' },
                 { href: '/contact', label: 'Contact', translationKey: 'nav.contact' },
              ].map((item) => (
                <motion.div 
                  key={item.href}
                  variants={menuItemVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href={item.href} 
                    className={`block px-3 py-3 text-base font-medium ${activeTab === item.label ? 'text-amber-600 font-semibold' : 'text-gray-700'} hover:text-amber-600 transition-colors border-b border-gray-100`}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveTab(item.label);
                    }}
                  >
                    {t(item.translationKey)}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                variants={menuItemVariants}
                className="px-3 py-4"
              >
                <Link href="/signup">
                <Button 
                  title={t('nav.orderNow')} 
                  bgColor="#ED8C29" 
                  color="black" 
                  styles="w-full text-center hover:bg-amber-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                />
                </Link>
                </motion.div>
                
                {/* Language Switcher */}
                <motion.div 
                  variants={menuItemVariants}
                  className="px-3 py-3 border-t border-gray-100 mt-2 z-10"
                >
                  <div className="flex justify-center">
                    <LanguageSwitcher />
                  </div>
                </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
