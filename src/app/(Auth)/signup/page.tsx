'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/Button';

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

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    console.log('Signup form submitted:', formData);
    // Add signup logic here
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
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAhcc6F0DVSMrJehyWpnLP659zuA1WqSzxUJVIWMsOB71WaPSoY93L0YTuh40rAHiEor0HwkeaJClSr2w8iteiWd0XOtsKB3kIa9cjCAzQCHprO_6KHhEHm7jBwqt-6qrelQWtxc4A7fBbSJ2PCm0jOUICHL6tj8DWaVWx2rJYWIk7FZzZSvGvGMEQi0UPShbQpcMLMlDJLkfPI-UjDGKsY4XKK67w2q9fApIxT3m5ndy26rwbPd14_kEmflQGLzYfIRp-kjglU2o")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          </div>
          
          <div className="p-6 sm:p-8">
            <motion.h2 
              className="text-3xl font-bold text-center text-[#181411] mb-6"
              variants={itemVariants}
            >
              Create Your Account
            </motion.h2>
            
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-5"
              variants={itemVariants}
            >
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#181411] mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-[#e4e1dd] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED8C29] focus:border-transparent transition-all duration-200 bg-[#f9f7f6]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#181411] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-[#e4e1dd] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED8C29] focus:border-transparent transition-all duration-200 bg-[#f9f7f6]"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#181411] mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full px-4 py-3 border border-[#e4e1dd] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED8C29] focus:border-transparent transition-all duration-200 bg-[#f9f7f6]"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#181411] mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 border border-[#e4e1dd] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED8C29] focus:border-transparent transition-all duration-200 bg-[#f9f7f6]"
                />
              </div>
              
              <div className="pt-2">
                <Button
                  type="submit"
                  title="Sign Up"
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
                Already have an account?{' '}
                <Link 
                  href="/login" 
                  className="text-[#ED8C29] hover:text-[#d17a1e] font-medium transition-colors"
                >
                  Log In
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