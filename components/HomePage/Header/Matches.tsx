"use client"

import React from 'react'
import dynamic from "next/dynamic"
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMatch from './SingleMatch';


const matches = [
  { no: 2, place: "Uk", team1: 'AUS', team2: "IND", score1: "474 & 232", score2: "269 & 155", result: "Australia won by 184 runs", links: ["Schedule", "Report", "Videos", "Series"] },

  { no: 4, place: "USA", team1: 'AUS', team2: "IND", score1: "474 & 232", score2: "269 & 155", result: "Australia won by 184 runs", links: ["Schedule", "Report", "Videos", "Series"] },

  { no: 6, place: "INDIA", team1: 'AUS', team2: "IND", score1: "474 & 232", score2: "269 & 155", result: "Australia won by 184 runs", links: ["Schedule", "Report", "Videos", "Series"] },

  { no: 8, place: "DUBAI", team1: 'AUS', team2: "IND", score1: "474 & 232", score2: "269 & 155", result: "Australia won by 184 runs", links: ["Schedule", "Report", "Videos", "Series"] }
]


const Matches = () => {

  const settings = {
    dots: true,
    
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
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
        <Slider {...settings}>
          {
            matches.map((item,index) => (
              <SingleMatch data={item}  key={index} />
            ))
          }
        </Slider>
      </div>

    </div>
  )
}

export default Matches
