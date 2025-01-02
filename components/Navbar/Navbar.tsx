"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa"
import axios from 'axios'

const Navbar = () => {
  const [showNav, setShowNav] = useState("bg-darkBlue")
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

    const handleChange = () => {
      if (window.scrollY > 0) {
        setShowNav("shadow-md shadow-black")
      } else {
        setShowNav("bg-darkBlue")
      }
    }

    window.addEventListener("scroll", handleChange)
    return () => window.removeEventListener("scroll", handleChange)
  }, [])

  return (
    <section className={`w-full bg-darkBlue z-30 fixed top-0 py-2.5 md:py-1 ${showNav}`}>
      <div className='w-11/12 mx-auto flex justify-between items-center'>
        <div className='text-[#D68038] font-Playfair text-[1rem] md:text-[2.1rem] font-bold'>
          <h2>Royal Exchange</h2>
        </div>

        <Link href={whatsappLink || "/"}>
          <button className='bg-green md:px-6 md:py-2.5 rounded-full text-white flex items-center gap-1 text-[1rem] hover:bg-darkGreen hover:scale-95 transition-all duration-300 ease-in-out py-1.5 px-3'>
            <span>
              <FaWhatsapp className='text-xl' />
            </span>
            Get Your !D
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Navbar