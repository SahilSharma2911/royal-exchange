import Image from 'next/image'
import React from 'react'

const Match = () => {
  return (
    <div>

      {/* left side Date and Time  */}
      <div>
        <div>Upcoming</div>
        <h3>Thu, 02 Jan, 25</h3>
        <p>05:45 IST</p>
      </div>

      {/* right side team info  */}
      <div className=' px-4'>
        <h3>Sri Lanka in New Zealand, 3 T20I Series, 2024/25</h3>
        <p>Saxton Oval, Nelson</p>
        <hr />
        <div>

          {/* team-1  */}
          <div>
            <Image src={""} alt='image' layout='responsive' />
            <p>
              NEW ZEALAND
            </p>
          </div>

          <span>
            Vs
          </span>

          {/* team-2  */}
          <div>
            <Image src={""} alt='image' layout='responsive' />
            <p>
              NEW ZEALAND
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Match
