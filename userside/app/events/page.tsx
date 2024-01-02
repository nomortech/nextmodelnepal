"use client";

import React from "react";
import Image from "next/image";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

const TimelineItem = ({ time, title, location }) => {
  return (
    <div className="flex items-start justify-center mb-8 max-w-[500px]">
      <div className="timeline-line z-[-1] w-1 translate-x-[20px] before:absolute before:content-[''] before:w-1 before:h-[200px] before:bg-[#B39670] before:ml-4 after:absolute after:content-[''] after:w-1 after:h-[400px] after:[#B39670] after:ml-4"></div>
      <div className="flex-shrink-0  rounded-full bg-blue-500 flex items-center justify-center mr-4">
        <Image
          src="https://images.pexels.com/photos/3270230/pexels-photo-3270230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="logo"
          width={62}
          height={62}
          className="rounded-full aspect-square object-center object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="text-xl font-bold mb-1">{title}</div>
        <div className="font-semibold mb-1">{time}</div>
        <p className="text-tertiary">{location}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="w-[90vw] m-auto">
      <div className="flex flex-col items-start justify-start gap-[3rem] min-h-screen">
        <TimelineItem
          time="February 2022"
          title="Application UI code in Tailwind CSS"
          location={"San Francisco, CA"}
        />
        <TimelineItem
          time="March 2022"
          title="Marketing UI design in Figma"
          location={"San Francisco, CA"}
        />
        <TimelineItem
          time="February 2022"
          title="Application UI code in Tailwind CSS"
          location={"San Francisco, CA"}
        />
        <TimelineItem
          time="March 2022"
          title="Marketing UI design in Figma"
          location={"San Francisco, CA"}
        />{" "}
        <TimelineItem
          time="February 2022"
          title="Application UI code in Tailwind CSS"
          location={"San Francisco, CA"}
        />
        <TimelineItem
          time="March 2022"
          title="Marketing UI design in Figma"
          location={"San Francisco, CA"}
        />{" "}
      </div>
    </div>
  );
};

export default Timeline;
