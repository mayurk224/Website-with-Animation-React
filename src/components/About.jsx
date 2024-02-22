import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-[4.5vw] leading-[5vw] tracking-tight '>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] border-[#93a84b] pt-10 mt-12'>
            <div className='w-1/2'>
                <h1 className='text-6xl'>Our Approach:</h1>
                <button className='flex gap-10 items-center uppercase px-10 py-6 bg-zinc-900 rounded-full text-white mt-10'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] bg-[#a1b753] rounded-3xl'>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" className='rounded-3xl'/>
            </div>
        </div>
    </div>
  )
}

export default About