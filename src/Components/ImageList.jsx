import React from 'react'
import fedex from '../Assets/Fedex.svg'
import google from '../Assets/google.svg'
import Ola from '../Assets/Ola.svg'
import microsoft from '../Assets/Microsoft.svg'
import Amazon from '../Assets/Amazon.svg'
import fedx from '../Assets/Fedx.svg'
import walmart from '../Assets/Walmart.svg'

const ImageList = () => {
  return (
    <div className='  h-50  flex flex-wrap gap-10 justify-center items-center'>
      <div  className=' w-full h-24 flex gap-10 justify-center items-center' >
        <div className=' shadow-md'><img src={ fedex} alt=""  className=' w-36 rounded-md p-4'/></div>
        <div className=' shadow-md'><img src={ google} alt="" className=' w-36 rounded-md p-4' /></div>
        <div className=' shadow-md'><img src={ Ola} alt=""  className=' w-36 rounded-md p-4'/></div>
        <div className=' shadow-md'><img src={ microsoft} alt="" className=' w-36 rounded-md p-4' /></div>
      </div>
      <div className=' w-full h-24 flex gap-10 justify-center items-center'>
        <div className=' shadow-md'><img src= {Amazon} alt=""  className=' w-36 rounded-md p-4'/></div>
        <div className=' shadow-md'><img src= {fedx} alt=""  className=' w-[98.77px] rounded-md p-4'/></div>
        <div className=' shadow-md'><img src= {walmart}alt=""  className=' w-36 rounded-md p-4'/></div>
      </div>    

    </div>
  )

}

export default ImageList