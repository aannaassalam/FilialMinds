import React from 'react'


const profileData = [
    {
        key : 1,
        title : "Name",
        value : "Atul Sourabh"
    },
    {
        key : 2,
        title : "Age",
        value : [7, 4]
    },
    {
        key : 3,
        title : "Gender",
        value : "Male"
    },
    {
        key : 4,
        title : "Daily Activity",
        value : "Done"
    }
]

const childActivityCardData = [
    {
        key : 1,
        title1 : "Creative",
        title2 : "Activities",
        desc : "Discover enjoyable activities such scoloring, crafting, and science.",
        bgColor : "[#664dd4]"
    },
    {
        key : 2,
        title1 : "Fun",
        title2 : "Games",
        desc : "Discover enjoyable activities such scoloring, crafting, and science."
    },
    {
        key : 3,
        title1 : "Interesting",
        title2 : "Stories",
        desc : "Discover enjoyable activities such scoloring, crafting, and science."
    }
]


const ChildComponent = () => {
  return (
    <div className='my-12'>
        <p className='text-3xl mb-5'>Children</p>
    <div className="relative  bg-[#d9ceeb] p-8 rounded-xl">
                
                <div className='absolute top-0 right-0'>
                    <button className='bg-blue-600 rounded-3xl text-white font-semibold m-4  px-5 py-2'>View Details</button>
                    <button className='bg-blue-600 rounded-3xl text-white font-semibold m-4  px-5 py-2'>Activity</button>
                </div>

                <div className='absolute bottom-0 right-0'>
                    <button className='bg-blue-600 rounded-3xl text-white font-semibold m-4  px-5 py-2'>Download Report</button>
                </div>

                <div className='flex items-center gap-20'>
                    <img src="/ParentDashboardImages/childProfile1.jpg" alt="" className='w-32 h-32 rounded-[50%] object-cover border-4 border-red-600 p-[1px]'/>
                    {
                        profileData.map((item) => (
                            <div className='text-center' key={item.key}>
                            <p  className='text-lg font-medium '>{item.title}</p>
                            <p className='text-2xl font-semibold'>{item.title === "Age" ? `${item.value[0]} years ${item.value[1]} months` : `${item.value}`}</p>
                    </div>
                        ))
                    }
                   

                    {/* <div className='text-center'>
                        <p className='text-lg font-medium '>Age</p>
                        <p className='text-2xl font-semibold'>7 years 4 months</p>
                    </div>

                    <div className='text-center'>
                        <p className='text-lg font-medium '>Gender</p>
                        <p className='text-2xl font-semibold'>Male</p>
                    </div>

                    <div className='text-center'>
                        <p className='text-lg font-medium '>Daily Task</p>
                        <p className='text-2xl font-semibold'>Done/Not Done</p>
                    </div> */}
                </div>

                <div className='flex gap-40 items-center my-8'>
                    <div className='flex items-center'>
                        <img src="/ParentDashboardImages/doctor.jpg" alt="" className='w-16 h-16 rounded-[50%] object-cover inline ml-5 mr-10' />
                        <p className='inline text-xl font-semibold'>Dr. Abhishek Singhal</p>
                    </div>

                    <div className='text-xl font-semibold'>Next Appointment : 5th Feb, 2024</div>
                </div>

                <div className='flex gap-20'>
                    {
                        childActivityCardData.map((item) => (
                            <div className='w-[25%] rounded-3xl bg-[#664dd4] p-5'  key={item.key}>
                        
                        <p className='text-white font-semibold text-2xl'>{item.title1}<br></br><span className='italic '>{item.title2}</span></p>
                        <p className='text-white font-medium'>{item.desc}</p>
                    </div>
                        ))
                    }

                
                    
                    </div>

                    
                </div>
            </div>
        
  )
}

export default ChildComponent
