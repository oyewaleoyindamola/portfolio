import React from 'react'
import logo from "../Assets/logo.svg"

const Nav = () => {
  return (
    <div className=' w-full h-10 flex items-center justify-around py-10'>
        <img src={logo} alt="" />
        <ul className=' flex gap-5 text-sm font-semibold text-white'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Testimonial</li>
            <li>Pricing</li>
        </ul>
        <button className=' w-32 h-8 bg-[orange] rounded-md font-medium text-xs text-[white]'>Get Started</button>
    </div>
  )
}

export default Nav