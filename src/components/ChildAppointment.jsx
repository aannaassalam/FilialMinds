import React from 'react'

const ChildAppointment = () => {
  return (
    <div>
      <p className='text-2xl font-semibold px-5'>Next Appointment</p>
      <div className='text-center py-10'>
        <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-20 h-20 rounded-[50%] object-cover mx-auto' />
        <p className='font-bold text-xl'>Dr. Rajesh Ranjan</p>
        <button className='px-4 py-2 bg-blue-600 mt-5 rounded-md'>SCHEDULED</button>
        <p>14th Feb, 2024.</p>
      </div>
    </div>
  )
}

export default ChildAppointment
