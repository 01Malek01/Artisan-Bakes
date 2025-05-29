'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const toggleLanguage = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle language menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-md overflow-hidden z-50"
        >
          <ul className="py-1">
            <li>
              <button
                onClick={() => toggleLanguage('en')}
                className={`w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-amber-100 text-amber-600' : 'hover:bg-gray-100'}`}
              >
                English
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleLanguage('ar')}
                className={`w-full text-left px-4 py-2 text-sm ${language === 'ar' ? 'bg-amber-100 text-amber-600' : 'hover:bg-gray-100'}`}
              >
                العربية
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
