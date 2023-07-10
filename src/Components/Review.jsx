import React from 'react'

const Review = () => {
  return (
    <div className=' flex flex-row justify-center items-center gap-10'>
        <div className=' shadow-md h-[281px] w-[261px] flex flex-col justify-center items-center gap-6 rounded-b-[309px]'>
            <h1 className=' text-5xl font-bold text-[#1F37FF]'> 50+</h1>
            <h3 className=' font-bold text-2xl'>Happy Clients</h3>
        </div>
        <div className=' shadow-md h-[281px] w-[261px] flex flex-col justify-center items-center gap-6 rounded-b-[309px]'>
            <h1  className=' text-5xl font-bold text-[#1F37FF]'> 550+</h1>
            <h3 className=' font-bold text-2xl'>Projects Completed</h3>
        </div>
        <div className=' shadow-md h-[281px] w-[261px] flex flex-col justify-center items-center gap-6 rounded-b-[309px]'>
            <h1 className=' text-5xl font-bold text-[#1F37FF]'>250</h1>
            <h3 className=' font-bold text-2xl'>Dedicated Mentors</h3>
        </div>
        <div className=' shadow-md h-[281px] w-[261px] flex flex-col justify-center items-center gap-6 rounded-b-[309px]'>
            <h1 className=' text-5xl font-bold text-[#1F37FF]'>30+</h1>
            <h3 className=' font-bold text-2xl'>Awards Won</h3>
        </div>
    </div>
  )
}

export default Review