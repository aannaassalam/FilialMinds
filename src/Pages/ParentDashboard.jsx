import React from 'react'
import ManageChild from '../components/ManageChild'
import ChildComponent from '../components/ChildComponent'
import ParentHero from '../components/ParentHero'

const ParentDashboard = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>
      <ParentHero />
      <ManageChild />
      <ChildComponent />
    </div>
  )
}

export default ParentDashboard
