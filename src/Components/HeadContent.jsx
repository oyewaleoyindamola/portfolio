import React from 'react'
import heroimage from '../Assets/heroImage.svg'

const HeadContent = () => {
  return (
    <div className=' w-screen h-[100%] flex flex-row justify-around align-middle items-center'>
      <div className=' w-[20%] h-[70%] bg-transparent flex flex-col  items-start'> 
      <div>
            <p className=' text-white text-xs font-semibold'>
              INSPIRATION TECHNOLOGY
            </p>
            <h1 className=' font-bold text-2xl  text-white'>Runs faster.</h1> 
            <h2 className=' text-lg text-white'>Cost less and</h2>
            <h2 className=' text-lg text-white pb-5'>never breaks.</h2>     
        </div>
        <div className=' w-full h-[1px] bg-white'></div>
        <h6 className=' text-white font-medium text-[12px] text-left pt-7'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat 
        </h6>
        <div className=' w-full flex flex-row gap-6 mt-5'>
          <button className=' w-16 h-6 bg-[orange] font-medium text-[10px] text-[white]'>Get Started</button>
          <button className='  w-16 h-6 border-[#d1cfcf] border-2 font-medium text-[10px] text-[white]'>Free trial</button>
        </div>
      </div>
        <img className=' w-[30%] h-[80%] mb-20' src={heroimage} alt="" />
    </div>
  )
}

export default HeadContent