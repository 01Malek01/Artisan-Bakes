import React from 'react'

interface Props{
   title: string
   onClick?: () => void
    bgColor : string
    color : string
    styles?: string
    type?: 'button' | 'submit' | 'reset'
} 
export default function Button({title, onClick, bgColor, color, styles, type}: Props) {
  return (
    <button 
      onClick={onClick} 
      type={type || 'button'}
      style={{
        backgroundColor: bgColor,
        color: color,
        cursor:"pointer"
      }}
      className={`${styles} rounded-xl p-2 hover:scale-105 transition-all duration-300 hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-500`}
    >
      {title}
    </button>
  )
}