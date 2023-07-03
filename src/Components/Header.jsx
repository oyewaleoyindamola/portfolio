import React from 'react'
import Nav from './Nav'
import HeadContent from './HeadContent'

const Header = () => {
  return (
    <div className=' w-screen h-[50vh] bg-blue-600'>
        <Nav/>
        <HeadContent/>
    </div>
  )
}

export default Header