'use client'
import Button from '@/components/Button'
import React from 'react'
import { useLanguage } from '@/app/context/LanguageContext';

export default function Page() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  return (
    <div className='contact py-5 ' dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }}>
         <header className="header" style={{ textAlign: isRTL ? 'right' : 'left' }}>
            <h1 className="title text-2xl font-bold text-center lg:text-left" dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }}>
                    {t('contact.visitUs')}
            </h1>
            <p className='description text-gray-400 text-center lg:text-left' dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }}>
            {t('contact.visitUs.description')} Find us at our main location in the heart of downtown. We&apos;re open seven days a week to serve you the freshest baked goods.            </p>
        </header>
        <div className="map w-full h-[400px] rounded-lg overflow-hidden my-6">
                 <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d-74.00594492404069!3d40.71277084502579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMTguNiJX!5e0!3m2!1sen!2sus!4v1622209327678!5m2!1sen!2sus"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={false} 
                 loading="lazy"
                 title="Bakery Location"
                 className="rounded-lg"
                 ></iframe>
        </div>

        <div className="contact-info">
        <h1 className="title text-2xl font-bold text-center lg:text-left mb-5" dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }}  >
         {t('contact.info')}
            </h1>

<div className="info grid grid-cols-2 gap-5 p-5">
<div className="address border-t-1 border-gray-200 py-2 text-sm md:text-lg" dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }}>
    <p className='text-[#8A7561]'>{t('contact.address')}</p>
    {t('contact.addressValue')}</div>
<div className="phone border-t-1 border-gray-200 py-2 text-sm md:text-lg">
    <p className='text-[#8A7561]'>{t('contact.phone')}</p>
    {t('contact.phoneValue')}</div>
<div className="email border-t-1 border-gray-200 py-2 text-sm md:text-lg">
    <p className='text-[#8A7561]'>{t('contact.email')}</p>
    {t('contact.emailValue')}</div>
<div className="hours border-t-1 border-gray-200 py-2 text-sm md:text-lg">
    <p className='text-[#8A7561]'>{t('contact.hours')}</p>
    {t('contact.hoursValue')}</div>
</div>

<div className="form my-8 p-2 md:p-0">
    <h1 className="title text-2xl font-bold text-center lg:text-left mb-5" dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }}>
        {t('contact.getInTouch')}
    </h1>
    <form action="">
        <input type="text" placeholder={t('contact.form.name')} className='w-full p-2 border-1 border-gray-200 rounded-lg focus:outline-none focus:border-[#ED8C29] mb-5'/>
        <input type="email" placeholder={t('contact.form.email')} className='w-full p-2 border-1 border-gray-200 rounded-lg focus:outline-none focus:border-[#ED8C29] mb-5'/>
        <textarea name="" id="" placeholder={t('contact.form.message')} className='w-full p-2 border-1 border-gray-200 rounded-lg focus:outline-none focus:border-[#ED8C29] mb-5'></textarea>
        <Button type="submit" title={t('contact.form.send')} bgColor="#ED8C29" color="text-white"/>
    </form>
</div>
        </div> 
    </div>
  )
}
