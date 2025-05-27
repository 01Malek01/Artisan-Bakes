import React from 'react'

interface Props{
   title: string
   onClick?: () => void
    bgColor : string
    color : string
    styles?: string
} 
export default function Button({title, onClick, bgColor, color, styles}: Props) {
  return (
    <button 
      onClick={onClick} 
      style={{
        backgroundColor: bgColor,
        color: color
      }}
      className={`${styles} rounded-xl p-2`}
    >
      {title}
    </button>
  )
}