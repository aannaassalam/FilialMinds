import React from 'react'

const ChildStats = () => {
  return (
    <div>
      <p className='text-2xl font-semibold mb-4'>Your stats</p>
      <div className='flex gap-20 mb-8'>
        <div className='p-3 bg-red-300 rounded-xl'>
            <p className='text-xl font-lg'>Total <br /> <span className='text-6xl'>7</span> <br />activities done.</p>
        </div>

        <div className='p-3 bg-red-300 rounded-xl'>
            <p className='text-xl font-lg'>Total <br /> <span className='text-6xl'>13</span> <br />games played.</p>
        </div>

        <div className='p-3 bg-red-300 rounded-xl'>
            <p className='text-xl font-lg'>Total <br /> <span className='text-6xl'>3</span> <br />stories listened.</p>
        </div>
      </div>
    </div>
  )
}

export default ChildStats
