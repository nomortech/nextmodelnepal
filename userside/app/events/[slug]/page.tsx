"use client"
import { useState } from "react";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeYear, setActiveYear] = useState<number>(2024);
  const data: string[] = ["Mr. Nepal", "Ms. nepal", "model hunt nepal"];

  return (
    <div className="py-[4rem]">
      <div className="flex w-3/4 mx-auto justify-evenly items-center bg-gray-800 rounded-full">
        {data.map((_: any, index: number) => (
          <div
            key={index}
            onClick={() => {setActiveIndex(index); setActiveYear(2024)}}
            className={`transition-all w-full h-full text-center !py-4 rounded-full ${index == activeIndex ? "active" : ""}`}
            >
            <button className="text-3xl capitalize">{_}</button>
          </div>
        ))}
      </div>
      <br />
      <div className="flex w-3/4 mx-auto justify-evenly items-center bg-gray-800 rounded-full">
        {[2022, 2023, 2024].map((_: any, index: number) => (
          <div key={index} onClick={() => setActiveYear(_)} className={`transition-all w-full h-full text-center !py-4 rounded-full ${_ == activeYear ? "active" : ""}`}>
            <button className="text-3xl capitalize">{_}</button>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-3 place-content-center justify-items-center gap-[3rem]">
        {data.map((_, index) => (
          <div>
            <button className="text-3xl capitalize ">{_}</button>
          </div>
        ))}
        {Array.from({ length: 3 }).map((_, index) => (
          <div>
            <div key={index}>
              {Array(3)
                .fill(new Date().getFullYear())
                .map((year, index) => (
                  <div key={index}>
                    <button className="text-3xl capitalize ">
                      {year - index}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
