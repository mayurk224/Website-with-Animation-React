import React from 'react'

function Company() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-20'>
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className="card w-full flex items-center relative justify-center h-full rounded-2xl bg-[#004D43]">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-8 bottom-8 px-3 py-1 border-[#7DAD5A] border-[2px] rounded-full text-[#7DAD5A]'>©2019-2021</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
            <div className="card w-full flex items-center relative justify-center h-full rounded-2xl bg-[#212121]">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-8 bottom-8 px-3 py-1 border-[#ffffff] border-[2px] rounded-full text-[#ffffff]  uppercase'>Rating 5.0 on clutch</button>
            </div>
            <div className="card flex items-center relative justify-center w-full h-full rounded-2xl bg-[#212121]">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className='h-28' />
            <button className='absolute left-8 bottom-8 px-3 py-1 border-white border-[2px] rounded-full text-[#ffffff]  uppercase'>Business Bootcamp alumani</button>
            </div>
        </div>
    </div>
  )
}

export default Company