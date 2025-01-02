import React from 'react'
import Matches from './Matches'
import Advertisment from './Advertisment'

const Hero = () => {
  return (
    <section className=" relative h-screen bg-[url('/background.jpeg')] bg-cover mt-14 ">
      <div className=' bg-black opacity-60 w-full h-full absolute '></div>
      <div className=' w-11/12 mx-auto pt-10'>
        <Matches />
        <Advertisment />
      </div>
    </section>
  )
}

export default Hero
