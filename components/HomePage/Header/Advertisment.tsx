import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Advertisment = () => {
  return (

    <div className=' w-10/12 mx-auto relative'>

      <div className='  absolute z-20 text-white flex flex-col justify-center items-center left-1/2 mt-14 -translate-x-1/2'>
        <h3 className=' text-[2.5rem] font-bold'>हर दांव पर जीत का भरोसा</h3>

        {/* whatsapp button  */}
        <Link href={"/"}>
          <button className=' bg-green md:px-12   md:py-3 rounded-full text-white flex items-center gap-1 text-[1.2rem] hover:bg-darkGreen hover:scale-95 transition-all duration-300 ease-in-out py-1 px-3 mt-6'>
            <span>
              <FaWhatsapp />
            </span>
            Join Now
          </button>
        </Link>



      </div>

      {/* Advertisment  */}
      <div className='w-full pt-[15rem]  z-20 '>
        <Image
          src="/advertisment.png"
          alt="image"
          layout="responsive" // Scales the image proportionally
          width={1200} // Defines the aspect ratio
          height={500} // Defines the aspect ratio
          className="object-fill w-full"
        />
      </div>

    </div>


  )
}

export default Advertisment
