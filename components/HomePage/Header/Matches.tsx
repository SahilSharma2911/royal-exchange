"use client"

import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic"
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMatch from './SingleMatch';
import axios from 'axios';

interface Match {
  id: number;
  match_id: string;
  match_status: string;
  created_at: string;
  updated_at: string;
}

interface MatchesApiResponse {
  status: string;
  data: Match[];
}

const Matches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const response = await axios.get<MatchesApiResponse>(
          'https://ghostpanel.tech/api/matches'
        );
        const liveMatches = response.data.data.filter(
          (match) => match.match_status === 'live'
        );
        setMatches(liveMatches);
      } catch (err) {
        console.log('Failed to fetch matches data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return <div>Loading matches...</div>;
  }

  if (!matches.length) {
    return <div>No matches available</div>;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>

      <div className="slider-container">
        {/* <div className="flex gap-5 font-base text-white px-3 md:px-5 mb-2 overflow-x-auto whitespace-nowrap">
          <h2 className="font-medium">Matches (10)</h2>
          <p>AUS vs IND (1)</p>
          <p>AUS vs IND (1)</p>
          <p>AUS vs IND (1)</p>
        </div> */}
        <div>
          <Slider {...settings}>
            {matches?.map((item) => (
              <SingleMatch match_id={item.match_id} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>

    </div>
  )
}

export default Matches
