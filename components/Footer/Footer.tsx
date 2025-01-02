import React from 'react'

const Footer = () => {
  return (
    <section className=' w-full bg-darkBlue text-white py-8'>
      <div className=' w-11/12 mx-auto flex justify-between md:flex-row flex-col gap-6 md:gap-0'>

        {/* section-1  */}
        <div className=' w-full md:w-4/12 flex flex-col gap-3'>
          <h3 className=' font-Kumbh text-[2rem] font-bold'>Royal Exchange</h3>
          <p className=' text-[1rem] font-Nunito'>
            Our mission is to provide a trusted platform for sports enthusiasts and gaming fans, delivering insights, entertainment, and secure experiences. Dive into a world of expertly curated content and features designed to enhance your love for sports and gaming responsibly. Explore the possibilities with us today!
          </p>
          <span>
            © 2017 all right reserved to royalexchange.live.
          </span>

        </div>
        
        {/* section-2  */}
        <div className=' w-full md:w-3/12 flex flex-col gap-3 '>
          <h3 className=' font-Kumbh text-[2rem] font-bold'>Disclaimer</h3>
          <p className=' text-[1rem] font-Nunito'>
            This Website is only for 18+ users. Be aware of fraudsters, we
            only deal via WhatsApp.
          </p>
        </div>

        {/* section-3  */}
        <div className=' w-full md:w-3/12 flex flex-col gap-3'>
          <h3 className=' font-Kumbh text-[2rem] font-bold'>Support</h3>
          <p className=' text-[1rem] font-Nunito'>
          info@royalexchange.live
          </p>
        </div>


      </div>
    </section>

  )
}

export default Footer
