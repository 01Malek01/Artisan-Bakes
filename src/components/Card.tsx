import Image from 'next/image';
import React from 'react'



type Props = {
    image:string;
    title:string;
    description:string;
    }

export default function Card({image,title,description}:Props) {
  return (
    <div className='flex flex-col gap-5 items-center lg:items-start justify-center max-width-[300px] min-width-[150px] max-height-[300px] min-height-[150px] mt-5'>
      <Image src={image} alt={image} width={300} height={170} className='object-cover rounded-xl'  />
      <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-bold lg:text-left  text-center  '>{title}</h2>
      <p className='text-sm w-full opacity-50 text-balance lg:text-left text-center'>{description}</p>
      </div>
    </div>
  )
}
