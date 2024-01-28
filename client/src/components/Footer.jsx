import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-gray-800 text-white'>
        <div className='flex justify-evenly py-10'>
        <div className='w-[400px]'>
            <div className='text-3xl  font-bold mb-4'>App Logo</div>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quisquam obcaecati rem. Aliquid hic quia ad maiores est earum excepturi, saepe .</p>
        </div>
        <div className='w-[300px] text-lg'>
            <h4 className='text-2xl font-semibold mb-4'>Company</h4>
            <p><a href="/" >About Us</a></p>
            <p><a href="/">Blogs</a></p>
            <p><a href="/">Services</a></p>
            <p><a href="/">FAQ's</a></p>
        </div>
        <div className='w-[300px]  text-lg'>
        <h4 className='text-2xl font-semibold mb-4'>Company</h4>
        <p><a href="/" >About Us</a></p>
            <p><a href="/">Blogs</a></p>
            <p><a href="/">Services</a></p>
            <p><a href="/">FAQ's</a></p>
        </div>
        
        </div>
        <div className='h-[1px] bg-gray-500'></div>
        <div className='text-center text-lg py-4'>Copyrights by Growthwiz. All rights reserved.</div>
    </div>
    
  )
}

export default Footer
