import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-speed=".1" data-scroll-section className='w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[18vw] leading-none font-bold pb-7 uppercase'>We are OCHI</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[18vw] leading-none font-bold pb-7 uppercase'>We are OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee