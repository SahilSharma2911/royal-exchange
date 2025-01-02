"use client"
import React from 'react';
import Matches from './Matches';
import Advertisment from './Advertisment';
import Image from 'next/image';

const Hero = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchMatches = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get('https://ghostpanel.tech/api/matches');
  //       setData(response.data);
  //       // setError(null);
  //     } catch (err) {
  //       console.log('Failed to fetch matches data: ');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMatches();
  // }, []);
  return (
    <section className="relative h-[60vh] md:h-[65vh] lg:h-screen bg-[url('/background.jpeg')] bg-cover mt-14">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative w-11/12 mx-auto pt-10 z-10">
        <Matches />
        <Advertisment />
      </div>

      {/* Advertisement image */}
      <div className="absolute bottom-[-11%] md:bottom-[-15%] lg:bottom-[-20%] left-1/2 transform -translate-x-1/2 z-20 w-[95vw] md:w-[85vw]">
        <Image
          src="/advertisment.png"
          alt="Advertisment Image"
          layout="responsive"
          width={1200}
          height={500}
          className="object-cover"
        />
      </div>

    </section>
  );
};

export default Hero;
