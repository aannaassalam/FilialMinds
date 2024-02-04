import React from 'react'

const ChildHero = () => {
  return (
    <div className=''>
      <div className=' text-5xl text-[#664dd4] font-semibold mb-4
      '>Hey Atul! <span className='text-[#f6d26f]'>Welcome </span> 👋🏼 </div>
      <div className='flex justify-between items-center pl-32 pr-48 bg-orange-600 mb-10 rounded-xl'>
                <img src="/child.png" alt="" className='w-[300px] ' />
                <div>
                    <p className='text-6xl uppercase'>This is your day 1 <br /> of something.</p>
                    <p className='text-3xl'>Go and Explpore!!!</p>
                </div>
                
            </div>
    </div>
  )
}

export default ChildHero
