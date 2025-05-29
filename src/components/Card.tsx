import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { useLanguage } from '@/app/context/LanguageContext';

type Props = {
    image:string;
    title:string;
    description:string;
    direction?:string;
    button?:string;
    buttonBgColor?:string;
    buttonColor?:string;
    buttonStyles?:string;
    imageOrder?:string;
    }

export default function Card({image,title,description,direction,button,buttonBgColor,buttonColor,buttonStyles,imageOrder}:Props) {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  return (
    <div className={`flex gap-5 items-center lg:items-start justify-between max-width-[300px] min-width-[150px] max-height-[300px] min-height-[150px] mt-5 ${direction ? direction === 'row' ? 'flex-row' : 'flex-col' : 'flex-col'}`} dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }}> 
      <Image src={image} alt={image} width={300} height={170} className={`object-cover rounded-xl order-${imageOrder}`}  />
      <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-bold lg:text-left text-center' dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }}>{typeof title === 'string' && (title.startsWith('menu.') || title.startsWith('gallery.') || title.startsWith('home.')) ? t(title) : title}</h2>
      <p className='text-sm max-w-[300px] opacity-50 text-balance lg:text-left text-center text-[#8A7561]' dir={isRTL ? 'rtl' : 'ltr'} style={{ textAlign: isRTL ? 'right' : 'left' }}>{typeof description === 'string' && (description.startsWith('menu.') || description.startsWith('gallery.') || description.startsWith('home.')) ? t(description) : description}</p>
      {button && <Button title={button} bgColor={buttonBgColor as string} color={buttonColor as string} styles={buttonStyles as string} />}
      </div>

    </div>
  )
}
