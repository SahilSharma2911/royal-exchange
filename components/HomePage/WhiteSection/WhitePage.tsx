import React from 'react'
import Blogs from './Blog/Blogs'
import AllMatches from './Matches/AllMatches'
import Directions from './Directions/Directions'

const WhitePage = () => {
  return (
    <section className=' w-11/12 relative mx-auto mt-[8rem]'>
      <Blogs />
      <AllMatches/>
      <Directions/>
    </section>
  )
}

export default WhitePage
