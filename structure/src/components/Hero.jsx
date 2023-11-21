import React from 'react'

export const Hero = () => {
  return (
    <div className='w-full h-[110vh]'>
     
     
      <div className='max-w-[1140px] m-auto '>
      <div className='absolute top-[35%] w-full md:-[60%] max-w-[790px] h-full flex flex-col text-white p-4 '>
          <h1 className='font-bold text-xl text-black text-center '> Balance: R101</h1>
          <div className='w-[250px] h-[250px] border-2 border-slate-700 items-center ml-24'>
           <h1 className='text-black text-center'>SWAP</h1>

           <div className='flex'>
           <h1 className='font-bold text-black '>$</h1>
           <h1 className='font-bold text-black text-right'>R</h1>
           </div>
          
          
          </div>
          <h2 className='font-bold text-4xl py-4'></h2>
          <button className='mt-4 rounded-full w-40 font-medium gradient-button'></button>
          <p className='mt-10 font-bold text-xl'>

            <div className=' '>
            <button className='text-black border-red-300 rounded bg-gray-300 px-4 mr-2  '>Liquidity</button>
            <button className='text-black border-red-300 rounded bg-gray-300 px-4 mr-2  '>INVEST</button>
            <button className='text-black border-red-300 rounded bg-gray-300 px-4 mr-2'>deposit</button>
            <button className='text-black border-red-300 rounded bg-gray-300 px-4 mr-2 mt-6'>withdraw</button>
            </div>
            
          
          </p>
        </div>

      </div>
    </div>
  )
}
