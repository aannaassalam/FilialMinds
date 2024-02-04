import React from 'react'

const ChildActivities = () => {
  return (
    <div>
      <p className='text-2xl font-semibold mb-4'>Your today's activity</p>
      <div className='flex gap-20 mb-8'>
        <div className='py-3 bg-red-300 rounded-xl flex '>
            <div className='pl-7'>
                <p className='text-3xl text-white font-semibold mb-20 pt-10 '>Listen <br /> <span className='text-2xl'>785 words</span></p>
                <button className='text-2xl px-8 py-1 rounded-3xl bg-red-400'>Start</button>
            </div>
            <img src="/earphone.png" alt="" className='pr-16'/>
        </div>

        <div className='py-3 bg-red-300 rounded-xl flex '>
            <div className='pl-7'>
                <p className='text-3xl text-white font-semibold mb-20 pt-10 '>Listen <br /> <span className='text-2xl'>785 words</span></p>
                <button className='text-2xl px-8 py-1 rounded-3xl bg-red-400'>Start</button>
            </div>
            <img src="/earphone.png" alt="" className='pr-16'/>
        </div>

        <div className='py-3 bg-red-300 rounded-xl flex '>
            <div className='pl-7'>
                <p className='text-3xl text-white font-semibold mb-20 pt-10 '>Listen <br /> <span className='text-2xl'>785 words</span></p>
                <button className='text-2xl px-8 py-1 rounded-3xl bg-red-400'>Start</button>
            </div>
            <img src="/earphone.png" alt="" className='pr-16'/>
        </div>
      </div>
    </div>
  )
}

export default ChildActivities
