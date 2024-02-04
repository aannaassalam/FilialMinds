import React from 'react'
import ChildHero from '../components/ChildHero'
import ChildExplore from '../components/ChildExplore'
import ChildStats from '../components/ChildStats'
import ChildActivities from '../components/ChildActivities'
import ChildAppointment from '../components/ChildAppointment'

const ChildDashboard = () => {
  return (
    <div className='flex'>
      <div className='w-[80%] px-[30px]'>
        <ChildHero />
        <ChildStats />
        <ChildActivities />
        <ChildExplore />
      </div>

      <div>
        {/* <childAppointment /> */}
        <ChildAppointment />
      </div>
      
    </div>
  )
}

export default ChildDashboard
