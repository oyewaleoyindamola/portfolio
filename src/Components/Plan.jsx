import React from 'react'

const Plan = () => {
  return (
    <div>
        <div className=' flex flex-col justify-center items-center gap-7'>
            <div className=' flex flex-col justify-center items-center w-full h-96 bg-[#EBEDFF]'>
                <h1 className=' font-bold text-2xl mt-[-6rem]'>Without Extra Charge Choose </h1>
                <h1 className=' font-bold text-2xl mb-8'>Your Best Plan</h1>
                <div className=' h-16 w-52 flex gap-4 justify-center items-center rounded-md bg-white mt-'>
                    <button className='bg-[#FF5A05] rounded-md h-10 w-20 px-2 ml-4 text-white'>Monthly</button>
                    <button className='bg-[#FF5A051A] rounded-md h-10 w-20 px-2 mr-4 text-[#FF5A05]'>Yearly</button>
                </div>
            </div>
            <div>
                <div className=' bg-green-600 h-[20rem] w-[20rem] flex flex-col items-center'>
                    <div className=' bg-[#1F37FF] h-10 w-16 rounded-b-[389px]'>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plan