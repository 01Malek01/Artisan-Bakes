import Image from 'next/image';
import React from 'react'
import Button from './Button';


type Props = {
    image:string;
    title:string;
    description:string;
    direction?:string;
    button?:string;
    buttonBgColor?:string;
    buttonColor?:string;
    buttonStyles?:string;
    }

export default function Card({image,title,description,direction,button,buttonBgColor,buttonColor,buttonStyles}:Props) {
  return (
    <div className={`flex gap-5 items-center lg:items-start justify-center max-width-[300px] min-width-[150px] max-height-[300px] min-height-[150px] mt-5 ${direction ? direction === 'row' ? 'flex-row' : 'flex-col' : 'flex-col'}`}> 
      <Image src={image} alt={image} width={300} height={170} className='object-cover rounded-xl order-1'  />
      <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-bold lg:text-left  text-center  '>{title}</h2>
      <p className='text-sm max-w-[300px] opacity-50 text-balance lg:text-left text-center '>{description}</p>
      {button && <Button title={button} bgColor={buttonBgColor as string} color={buttonColor as string} styles={buttonStyles as string} />}
      </div>

    </div>
  )
}
