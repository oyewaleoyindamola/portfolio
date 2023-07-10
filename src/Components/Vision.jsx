import React from 'react'
import bulb from '../Assets/bulb.svg'
import pen from '../Assets/pen.svg'
import hand from '../Assets/hand.svg'
import setting from '../Assets/setting.svg'
import users from '../Assets/users.svg'

const Vision = () => {
  return (
    <div className='  h-[650.67px] bg-[#FFF9F5] mt-[8rem] flex flex-col justify-center items-center gap-10'>
        <div className=' flex gap-5'>
            <div className=' w-[358px] h-[250px] p-10'>
              <div> 
                <h2 className=' text-[#FF5A05]'> YOUR VISION, OUR FUTURE </h2>
              </div>
              <h1 className=' font-bold text-2xl mb-3'> Committed to People</h1>
              <h1>Committed</h1>
              <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. </p>
            </div>
            <div className=' w-[358px] h-[250px] bg-[#4252CF] text-white p-10'>
              <img src={bulb} alt="" />
              <h1 className=' font-bold text-2xl mb-3'> Creative Ideas</h1>
              <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Sed <br/> donec gravida </p>
            </div>
            <div className=' w-[358px] h-[265px]  bg-white p-10'>
              <img src={pen} alt="" />
              <h1 className=' font-bold text-2xl mb-3'>Beautiful Blog</h1>
              <p>Lorem ipsum dolor sit amet,  <br />consectetur adipiscing elit. Sed <br /> donec gravida </p>
            </div>
        </div>
        <div className=' flex gap-5'>
            <div className=' w-[358px] h-[265px] bg-white p-10'> 
              <img src={users} alt="" />
              <h1 className=' font-bold text-2xl mb-3'> User Friendly</h1>
              <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed <br/> donec  gravida </p>
            </div>
            <div className=' w-[358px] h-[265px] bg-white p-10'>
              <img src={setting} alt="" />
              <h1 className=' font-bold text-2xl mb-3'>Perfect Showcase</h1>
              <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Sed <br/> donec gravida </p>
            </div>
            <div className=' w-[358px] h-[265px]  bg-white p-10'>
              <img src={hand} alt="" className=' mb-3' />
              <h1 className=' font-bold text-2xl mb-3'>Easy to Use</h1>
              <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Sed <br/> donec gravida </p>
            </div>
        </div>
    </div>
  )
}

export default Vision