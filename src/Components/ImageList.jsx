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
    <div className=' w-full h-50 bg-black flex  flex-wrap gap-10 justify-center items-center'>
        <div  className=' w-full h-24 flex  flex-wrap gap-10 justify-center items-center' >
        <img src={ fedex} alt=""  className=' w-36 bg-white rounded-md p-4'/>
            <img src={ google} alt="" className=' w-36 bg-white rounded-md p-4' />
            <img src={ Ola} alt=""  className=' w-36 bg-white rounded-md p-4'/>
            <img src={ microsoft} alt="" className=' w-36 bg-white rounded-md p-4' />
        </div>
        <div className=' w-full h-24 flex  flex-wrap gap-10 justify-center items-center'>
            <img src= {Amazon} alt=""  className=' w-36 bg-white rounded-md p-4'/>
            <img src= {fedx} alt=""  className=' w-[98.77px] bg-white rounded-md p-4'/>
            <img src= {walmart}alt=""  className=' w-36 bg-white rounded-md p-4'/>
        </div>

    </div>
  )

}

export default ImageList