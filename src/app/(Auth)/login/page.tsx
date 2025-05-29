'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/Button';
import { useLanguage } from '@/app/context/LanguageContext';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

const Page: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    // Add login logic here
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-md">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          variants={itemVariants}
        >
          <div className="relative w-full h-48 bg-center bg-cover"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQoJPEcHetZkKeBzONWbDmspzG37bjOxT1WZR2xWKSRiwPGQ4k05_1E9Xnb3INfRgfGwRrrXII5MrRF8dUU9Ia1qM2d85MWMYWzFXnEcc9QZljCZb_fjUxve_TvtfYhnMOdl-3cXPBJjVMYQfK_ZiiB9mh8CNh__goQAXoHOdi0FBnHKIihCzFMCPMVixJb8_fwEeGoFRz1kixkZvyPFrccJMft5Z9ja0VQMJZp9cGVwynWRa7nt6JeaFqF88OIW8hW0Q_wRCPBCQ")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          </div>
          
          <div className="p-6 sm:p-8">
            <motion.h2 
              className="text-3xl font-bold text-center text-[#181411] mb-6"
              variants={itemVariants}
            >
              {t('login.title')}
            </motion.h2>
            
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={itemVariants}
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#181411] mb-2">
                  {t('login.email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('placeholder.email')}
                  className="w-full px-4 py-3 border border-[#e4e1dd] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED8C29] focus:border-transparent transition-all duration-200 bg-white"
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-[#181411]">
                    {t('login.password')}
                  </label>
                  <Link 
                    href="/forgot-password" 
                    className="text-sm text-[#ED8C29] hover:text-[#d17a1e] transition-colors"
                  >
                    {t('login.forgotPassword')}
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder={t('placeholder.password')}
                  className="w-full px-4 py-3 border border-[#e4e1dd] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED8C29] focus:border-transparent transition-all duration-200 bg-white"
                />
              </div>
              
              <div className="pt-2">
                <Button
                  type="submit"
                  title={t('login.button')}
                  bgColor="#ED8C29"
                  color="white"
                  styles="w-full py-3 rounded-xl hover:bg-[#d17a1e] transition-colors duration-200"
                />
              </div>
            </motion.form>
            
            <motion.div 
              className="mt-6 text-center"
              variants={itemVariants}
            >
              <p className="text-[#917E6B]">
                {t('login.newUser')}{' '}
                <Link 
                  href="/signup" 
                  className="text-[#ED8C29] hover:text-[#d17a1e] font-medium transition-colors"
                >
                  {t('login.signupLink')}
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page;
