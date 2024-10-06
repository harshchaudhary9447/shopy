import React, { HTMLAttributes } from 'react'
import {cn} from "@/lib/utils"

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc:string
    dark?:boolean
  
}

const Phone = ({className,imgSrc,dark=false,...props}:PhoneProps) => {
  return (
    <div className={cn("z-50 relative pointer-events-none overflow-hidden",className)}{...props}>
       <img 
       src={
        dark ? '/phone-template-dark-edges.png'
        : '/phone-template-white-edges.png'
       } className='pointer-events-none z-50 select-none'/>

       <div className='absolute -z-10 inset-0'>
        <img src={imgSrc}
        className=' object-cover'/>
       </div>
        </div>
  )
}

export default Phone