import React from 'react'

function Marquee() {
  return (
    <div className='w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
            <h1 className='text-[18vw] leading-none font-bold pb-7 uppercase'>We are OCHI</h1>
            <h1 className='text-[18vw] leading-none font-bold pb-7 uppercase'>We are OCHI</h1>
        </div>
    </div>
  )
}

export default Marquee