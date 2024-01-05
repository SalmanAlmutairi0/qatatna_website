import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import mockup1 from "../../../assets/mobile_screen_imgs/mockup_1.png";
import mockup2 from "../../../assets/mobile_screen_imgs/mockup_2.png";
import mockup3 from "../../../assets/mobile_screen_imgs/mockup_3.png";
import mockup4 from "../../../assets/mobile_screen_imgs/mockup_4.png";
import mockup5 from "../../../assets/mobile_screen_imgs/mockup_5.png";
import mockup6 from "../../../assets/mobile_screen_imgs/mockup_6.png";
import mockup7 from "../../../assets/mobile_screen_imgs/mockup_7.png";
import mockup8 from "../../../assets/mobile_screen_imgs/mockup_8.png";
import mockup9 from "../../../assets/mobile_screen_imgs/mockup_9.png";
import mockup10 from "../../../assets/mobile_screen_imgs/mockup_10.png";

import "./carousel.css";
export default function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const screens = [
    mockup1,
    mockup2,
    mockup3,
    mockup4,
    mockup5,
    mockup6,
    mockup7,
    mockup8,
    mockup9,
    mockup10,
  ];

  return (
    <>
        <Slider {...settings}>
        {screens.map((screen, index) => (
            <div key={index} className="mobile-screen">
            <img src={screen} alt="" />
            </div>
        ))}
        </Slider>
    </>
  );
}
