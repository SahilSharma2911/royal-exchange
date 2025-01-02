import React from 'react'

interface dataProps {
  data: {
    no: number;
    place: string;
    team1: string;
    team2: string;
    score1: string;
    score2: string;
    result: string;
    links: string[];
  }
}


const SingleMatch = ({ data }: dataProps) => {
  return (
    <section className=' w-[300px] py-2 rounded-md bg-white'>
      <div>

        {/* heading  */}
        <h3>
          <span>RESULT</span>
          •
          <span>{data?.no}th TEST</span>
          •
          <span>{data?.place}</span>
        </h3>

        <div>
          {/* team-1  */}
          <p className=' flex justify-between items-center'>
            <span>
              <span>
                Flag
              </span>
              {data?.team1}
            </span>

            <span>
              {data?.score1}
            </span>

          </p>

          {/* team-2  */}
          <p className=' flex justify-between items-center'>
            <span>
              <span>
                Flag
              </span>
              {data?.team2}
            </span>

            <span>
              {data?.score2}
            </span>

          </p>

          {/* final result  */}
          <p>
            {data?.result}
          </p>
        </div>

      </div>
      <hr />

      {/* other links  */}
      <div className=' bg-lightSlate'>
        <ul className=' flex gap-2'>
          {data?.links.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default SingleMatch
