import React from 'react'
import BigBlog from './BigBlog'
import Blog from './Blog'

const Blogs = () => {
  return (
    <section className=' w-full'>

      {/* left section match blogs  */}
      <div className=' border rounded-lg w-8/12 py-4'>
        <div>
          <h3 className=' font-Roboto text-[1.2rem] font-bold px-4'>Match Coverage</h3>

          {/* filter matches */}
          <div className=' font-Roboto flex gap-6 py-2  px-4'>

            <button className=' flex flex-col '>
              Aus vs Ind
              <span className=' text-[0.7rem] text-slate'> 4th Men&#39;s Test</span>
            </button>

            <button className=' flex flex-col '>
              Aus vs Ind
              <span className=' text-[0.7rem] text-slate'> 1th Men&#39;s Test</span>
            </button>

            <button className=' flex flex-col '>
              Aus vs Ind
              <span className=' text-[0.7rem] text-slate'> 2th Men&#39;s Test</span>
            </button>

            <button className=' flex flex-col '>
              Vijay Hazare
              <span className=' text-[0.7rem] text-slate'>India domestic</span>
            </button>

            <button className=' flex flex-col '>
              BBL
              <span className=' text-[0.7rem] text-slate'>T20 League</span>
            </button>
          </div>

        </div>
        <hr className=' py-2' />

        {/* all  blogs  */}
        <div className=' flex flex-col px-4'>
          <BigBlog />

          <div className=' flex gap-4'>

            <Blog />
            <Blog />
            <Blog />
            <Blog />


          </div>
        </div>



      </div>

      {/* right section match advertisment  */}
      <div className=' w-3/12'>

      </div>

    </section>
  )
}

export default Blogs
