import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
const BigBlog = () => {
  return (
    <div className=' flex gap-2 font-Roboto'>

      {/* left side Image section  */}
      <div className=' w-6/12 relative'>
        <Image src={"/smallBlog.png"} alt='Image' width={600} height={600} className=' object-fill w-full rounded-lg'  />
        <div className=' bg-black text-white absolute w-full top-[13rem] rounded-b-lg py-1 '>
          <p className=' text-center'>Cummins:&#39;One of the best Tests I&#39;ve been part of&#39;</p>
        </div>
      </div>

      {/* right side info section  */}
      <div className=' font-Roboto w-6/12 flex flex-col gap-4'>
        <h3 className=' text-[1.8rem] font-bold'>India lose seven in final session,
          Australia snatch 2-1 lead</h3>


        <p className=' text-[#48494A] flex justify-between items-center'>AUS vs IND: Australia won by 184 runs <span> <IoIosArrowForward/> </span> </p>

        <ul className=' space-y-2'>
          <li className=' flex  items-center'>
            <span> <IoIosArrowForward/> </span>
            Muthu: India lose a Test they needn&#39;t have
          </li>
          <li className=' flex items-center'>
            <span> <IoIosArrowForward/> </span>
            <span className=' font-bold'>WTC final scenarios</span> - India must win in Sydney, and hope
          </li>
          <li className=' flex items-center'>
            <span> <IoIosArrowForward/> </span>
            Rohit: Pant needs to figure out risk-reward game himself
          </li>
        </ul>

      </div>

    </div>
  )
}

export default BigBlog
