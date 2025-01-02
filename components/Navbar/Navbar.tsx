"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {

  const [showNav, setShowNav] = useState("bg-darkBlue")

  useEffect(() => {

    const handleChange = () => {

      if (window.scrollY > 0) {
        setShowNav("shadow-md shadow-black")
      } else {
        setShowNav("bg-darkBlue")
      }
    }

    window.addEventListener("scroll", handleChange)

    return () => {
      window.removeEventListener("scroll", handleChange)
    }

  }, [])



  return (
    <section className={`w-full bg-darkBlue z-30 fixed top-0 py-1 ${showNav}`}>
      <div className=' w-11/12 mx-auto flex justify-between items-center'>

        {/* Logo  */}
        <div className=' text-[#D68038] font-Playfair text-[1rem] md:text-[2.1rem] font-bold'>
          <h2>Royal Exchange</h2>
        </div>

        {/* whatsapp button  */}
        <Link href={"/"}>
          <button className=' bg-green md:px-12   md:py-3 rounded-full text-white flex items-center gap-1 text-[1.2rem] hover:bg-darkGreen hover:scale-95 transition-all duration-300 ease-in-out py-1 px-3'>
            <span>
              <FaWhatsapp />
            </span>
            Get Your ID
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Navbar
