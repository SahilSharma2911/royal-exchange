import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className=' flex flex-col mt-14'>

      <div>
        <Image src={"/smallBlog.png"} alt='Image' width={200} height={200} className=' object-fill w-[200px]' />
      </div>
      <div>
        <h3>The mistakes that cost India the MCG Test</h3>
      </div>

    </div>
  )
}

export default Blog
