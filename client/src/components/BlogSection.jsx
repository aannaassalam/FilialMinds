import React from 'react'

const BlogSection = () => {
  return (
    <div>
      <h2 className='text-center text-5xl italic font-semibold'>Read our <span className='text-purple-600'>blogs</span></h2>
      <div className='flex flex-wrap justify-evenly mt-20 mb-12'>

        <div className='w-[20%] rounded-3xl overflow-hidden bg-gray-200'>
            <img src="https://images.unsplash.com/photo-1437943085269-6da5dd4295bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-[200px] object-cover" alt="" />
            <h4 className='px-5 pt-5 pb-1 font-bold text-xl whitespace-nowrap overflow-hidden text-ellipsis '>Parenting tips and techniques </h4>
            <h6 className='px-5 font-semibold text-gray-800 text-[18px] '>Description about the blog. </h6>
            <h6 className='px-5 pb-6 pt-4 cursor-pointer'><a className='text-purple-600  text-[17px]  underline font-semibold'>Read full blog</a></h6>
        </div>

        <div className='w-[20%] rounded-3xl overflow-hidden bg-gray-200'>
            <img src="https://images.unsplash.com/photo-1437943085269-6da5dd4295bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-[200px] object-cover" alt="" />
            <h4 className='px-5 pt-5 pb-1 font-bold text-xl whitespace-nowrap overflow-hidden text-ellipsis '>Parenting tips and techniques </h4>
            <h6 className='px-5 font-semibold text-gray-800 text-[18px] '>Description about the blog. </h6>
            <h6 className='px-5 pb-6 pt-4 cursor-pointer'><a className='text-purple-600  text-[17px]  underline font-semibold'>Read full blog</a></h6>
        </div>

        <div className='w-[20%] rounded-3xl overflow-hidden bg-gray-200'>
            <img src="https://images.unsplash.com/photo-1437943085269-6da5dd4295bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-[200px] object-cover" alt="" />
            <h4 className='px-5 pt-5 pb-1 font-bold text-xl whitespace-nowrap overflow-hidden text-ellipsis '>Parenting tips and techniques </h4>
            <h6 className='px-5 font-semibold text-gray-800 text-[18px] '>Description about the blog. </h6>
            <h6 className='px-5 pb-6 pt-4 cursor-pointer'><a className='text-purple-600  text-[17px]  underline font-semibold'>Read full blog</a></h6>
        </div>

      </div>
    
      <div className=' bg-purple-600 text-white text-[20px] px-5 py-2 mb-5 rounded-3xl font-semibold mt-4 w-[200px] text-center ml-[50%] translate-x-[-50%]'><a href="/">View all blogs</a></div>
    </div>
  )
}

export default BlogSection
