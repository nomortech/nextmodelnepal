"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

const LogoSlider = () => {
  const [settings] = useState({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  });

  const logos = [
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    // Add more logos here
  ];

  // Your component logic
  return (
    <div className="py-[5rem] mt-[2rem] bg-black">
      <Slider
        swipeToSlide={false}
        arrows={false}
        accessibility={false}
        {...settings}
      >
        {logos.map((logo, index) => (
          <div key={index} className="container">
            <Image src={logo} alt={"logo"} width={150} height={150} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default LogoSlider;
