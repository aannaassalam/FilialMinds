import React from 'react'
import photo1 from '../../public/reportSectionImages/photo1.png'
import photo2 from '../../public/reportSectionImages/photo2.png'
import photo3 from '../../public/reportSectionImages/photo3.png'
import photo4 from '../../public/reportSectionImages/photo4.png'
import photo5 from '../../public/reportSectionImages/photo5.png'

const ReportSection = () => {
  return (
    <div>
      <p className='text-6xl font-bold text-[#d91e5c] text-center mb-6'>One Report</p>
      <p className='text-5xl font-semibold text-blue-700 text-center mb-10'>Limitless possibilities for your child</p>
      <p className='text-2xl w-[60%] mx-auto text-center'>Put together by expert psychologists & talent advisors, your child’s talent discovery report provides you with life-transforming insights into your child. Here’s what the 16+ page report reveals:</p>

      <div className='w-[75%] mx-auto flex flex-wrap justify-evenly pt-36 pb-28'>
      <div className='w-[400px] mb-20'>
            <img src={photo2} className="w-24 mx-auto" alt="" />
            <p className='text-3xl font-bold text-center text-[#00bf62] mb-3 mt-2'>Learning Dimensions</p>
            <p className='font-semibold text-[22px] text-center'>Gain insight into your child’s thinking style & childhood developmental stages.</p>
        </div>

        <div className='w-[400px] mb-20'>
            <img src={photo3} className="w-24 mx-auto" alt="" />
            <p className='text-3xl font-bold text-center text-[#8c52ff] mb-3 mt-2'>Learning Dimensions</p>
            <p className='font-semibold text-[22px] text-center'>Gain insight into your child’s thinking style & childhood developmental stages.</p>
        </div>

        <div className='w-[400px] mb-20'>
            <img src={photo4} className="w-24 mx-auto" alt="" />
            <p className='text-3xl font-bold text-center text-[#004aad] mb-3 mt-2'>Learning Dimensions</p>
            <p className='font-semibold text-[22px] text-center'>Gain insight into your child’s thinking style & childhood developmental stages.</p>
        </div>

        <div className='w-[400px] mb-20'>
            <img src={photo5} className="w-24 mx-auto" alt="" />
            <p className='text-3xl font-bold text-center text-[#ff3131] mb-3 mt-2'>Learning Dimensions</p>
            <p className='font-semibold text-[22px] text-center'>Gain insight into your child’s thinking style & childhood developmental stages.</p>
        </div>

        <div className='w-[400px] mb-20'>
            <img src={photo1} className="w-24 mx-auto" alt="" />
            <p className='text-3xl font-bold text-center text-[#0cc1e0] mb-3 mt-2'>Learning Dimensions</p>
            <p className='font-semibold text-[22px] text-center'>Gain insight into your child’s thinking style & childhood developmental stages.</p>
        </div>
      </div>
    </div>
  )
}

export default ReportSection
