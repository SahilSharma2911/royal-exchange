"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Directions = () => {
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
  }, [])

  return (
    <div className=' bg-bgSlate p-4  flex flex-col gap-6 my-10'>

      <h3 className=' font-Nunito text-[1.3rem] text-center font-bold flex flex-col gap-4'>
        Royal Exchange is the best!
        Know why
      </h3>
      <p>
        Dive into a comprehensive collection of cricket updates, including in-depth match predictions, live scores, and the latest news. From thrilling T20 games to the strategic gameplay of Test matches, Royal Exchange ensures you’re always connected to the cricketing world.
      </p>
      <ul className=' flex flex-col gap-4'>
        <li className=' flex flex-col gap-1'>
          <span className=' font-bold'>Dedicated Cricket ID</span>
          Our unique Dedicated Cricket ID helps you access personalized predictions, match updates, and exclusive content quickly and easily. Tailored recommendations and priority support enhance your experience, making every interaction with our platform seamless and enjoyable
        </li>
        <li className=' flex flex-col gap-1'>
          <span className=' font-bold'>Local Expertise</span>
          As a trusted name in the cricketing community, we understand the needs of fans and players alike. Our platform delivers insights that align with regional interests, ensuring you get updates and predictions that truly resonate with your love for the game
        </li>
        <li className=' flex flex-col gap-1'>
          <span className=' font-bold'>Exceptional Customer Support</span>
          We’re here to support your cricketing journey every step of the way. Our knowledgeable team is ready to assist with any inquiries, whether you’re exploring predictions, tracking scores, or navigating the platform. Your satisfaction is our top priority
        </li>
        <li className=' flex flex-col gap-1'>
          <span className=' font-bold'>Fast and Secure Transactions</span>
          Enjoy a hassle-free experience with our fast and secure platform. Whether you’re accessing live scores or diving into detailed match stats, our user-friendly interface and secure data handling ensure you can focus solely on enjoying the game.
        </li>
      </ul>

      {/* whatsapp button  */}
      <div className=' flex justify-center items-center my-8'>
        <Link href={whatsappLink || "/"}>
          <button className=' bg-green md:px-6 md:py-2.5 rounded-full text-white flex items-center gap-1 text-[1.2rem] hover:bg-darkGreen hover:scale-95 transition-all duration-300 ease-in-out py-1 px-3'>
            <span>
              <FaWhatsapp className='text-xl' />
            </span>
            Get Your !D
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Directions
