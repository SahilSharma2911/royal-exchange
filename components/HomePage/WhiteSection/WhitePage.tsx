import React from 'react'
import Blogs from './Blog/Blogs'
import Directions from './Directions/Directions'
import UpcommingMatces from './UpcommingMatches/UpcommingMatces'

const WhitePage = () => {
  return (
    <section className='w-11/12 relative mx-auto mt-[5rem] md:mt-[8rem] lg:mt-[12rem]'>
      <UpcommingMatces />
      <Blogs />
      <Directions />
    </section>
  )
}

export default WhitePage
