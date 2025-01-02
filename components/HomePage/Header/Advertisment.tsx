"use client"
// import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';

const Advertisment = () => {

  const [currentText, setCurrentText] = useState(0);
  const texts = [
    { hindi: 'हर दांव पर जीत का भरोसा', english: 'Victory Begins with Royal' }
  ];

  const [whatsappLink, setWhatsappLink] = useState("")
  useEffect(() => {
    const fetchWhatsappLink = async () => {
      try {
        const response = await axios.get('https://ghostpanel.tech/api/whatsapp')
        if (response.data.status === "success") {
          setWhatsappLink(response.data.data.link)
        }
      } catch (error) {
        console.error('Error fetching WhatsApp link:', error)
      }
    }

    fetchWhatsappLink()

    const timer = setInterval(() => {
      setCurrentText((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [])

  return (

    <div className='w-10/12 mx-auto relative'>
      <div className='w-full absolute z-20 text-white flex flex-col justify-center items-center left-1/2 mt-10 md:mt-12 -translate-x-1/2'>
        <div className="w-full text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentText}
              className=" w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-[1.5rem] lg:text-[2.5rem] font-bold">
                {currentText === 0 ? texts[0].hindi : texts[0].english}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* whatsapp button  */}
        <Link href={whatsappLink || "/"}>
          <button className=' bg-green md:px-6 md:py-2.5 rounded-full text-white flex items-center gap-1 text-[1rem] hover:bg-darkGreen hover:scale-95 transition-all duration-300 ease-in-out py-1 px-3 mt-4 md:mt-7'>
            <span>
              <FaWhatsapp className='text-xl' />
            </span>
            GET YOUR DEMO !D
          </button>
        </Link>
      </div>
    </div>


  )
}

export default Advertisment
