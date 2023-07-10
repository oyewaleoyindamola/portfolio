import React from 'react'
import thinkingGuy from '../Assets/thinkingGuy.svg'
import tick from '../Assets/tick.svg' 

const CalltoAction = () => {
  return (
    <div>
      <div className=' h-[40rem] flex justify-center items-center gap-5 '>
        <div className=' my-20'>
            <img src={thinkingGuy} alt="" className=' w-[40rem] h-[35rem]'/>
        </div>
        <div className=' flex flex-col my-36'>
          <p className=' w-[255px] text-[#FF5A05]'>LOREM IPSUM DOLOR SIT AME</p>
          <h2 className=' w-[546px] text-4xl font-bold text'>Simple Solutions for <br/> Complex Connections</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec <br />
          gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi <br /> 
          odio a velit feugiat sapien.</h3>
        <div className=' flex gap-5 my-3'>
            <div className=' flex gap-1'>
              <img src= {tick} alt="" /> 
              <p>High Analysis</p>
            </div>
            <div className=' flex gap-1'>
              <img src= {tick} alt="" /> 
              <p>Certified Institute</p>
            </div>
        </div>
        <div><button className=' w-[169px] bg-[#FF5A05] h-[62px] text-white font-bold rounded-md'>Learn More </button></div>
      </div>
    </div>
    </div>
  )
}
export default CalltoAction