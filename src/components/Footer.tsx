import { Facebook, Instagram } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
      <footer className='flex flex-col items-center justify-center h-20 w-full gap-6 text-[#8A7561] mb-10 mt-20 '>
        <div className='flex justify-evenly w-full gap-36'>
            <div>
            Privacy Policy
            </div>
            <div>
            Terms of Service
            </div>
        </div>
        <div className='flex gap-2'>
        <Instagram />
        <Facebook />
        </div>
        <div className='flex justify-center mx-auto'>
          <p>© 2024 The Daily Crumb. All rights reserved.</p>
        </div>
      </footer>
  )
}
