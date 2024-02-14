"use client"
import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import {data, events} from "@/components/static/events";
import Timeline from "@/components/common/timeline";
import { GridTileImage } from "@/components/ui/GridImage";

const Events: NextPage = (): ReactElement => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeYear, setActiveYear] = useState<number>();
    const [titles, setTitles] = useState<string[]>([]); 
    const [activeTitle, setActiveTitle] = useState<string>();
    const [years, setYears] = useState<number[]>();
    const [eventsData, setEventsData] = useState<any>();

    useEffect(() => {
        console.log(data);
        const eventTitles = data.map((item) => item.title);
        setTitles(eventTitles);
        setActiveTitle(eventTitles[0]);

        const eventYears: number[] = [];
        data.forEach((item) => {
            if(item.title === eventTitles[0]) {
                item.years.forEach((yearItem) => {
                    eventYears.push(yearItem.year);
                });
            }
        });
        setYears(eventYears);
        setActiveYear(eventYears[eventYears.length - 1]);
        const event = data.find(item => item.title === eventTitles[0]);
        const eventsForYear = event?.years.find(yearItem => yearItem.year === eventYears[eventYears.length - 1])?.events || [];
        setEventsData(eventsForYear);
    }, [])

    const changeEventTitle = (title: string) => {
        setActiveTitle(title);
        const eventYears: number[] = [];
        data.forEach((item) => {
            if(item.title === title) {
                item.years.forEach((yearItem) => {
                    eventYears.push(yearItem.year);
                });
            }
        });
        setYears(eventYears);
        setActiveYear(eventYears[eventYears.length - 1]);
        const event = data.find(item => item.title === title);
        const eventsForYear = event?.years.find(yearItem => yearItem.year === eventYears[eventYears.length - 1])?.events || [];
        setEventsData(eventsForYear);
    }

    const changeActiveYear = (year: number) => {
        setActiveYear(year);
        const event = data.find(item => item.title === activeTitle);
        const eventsForYear = event?.years.find(yearItem => yearItem.year === year)?.events || [];
        setEventsData(eventsForYear);
    }

    // useEffect(() => {
    //     const eventYears: number[] = [];
    //     data.forEach((item) => {
    //         if(item.title === activeTitle) {
    //             item.years.forEach((yearItem) => {
    //                 eventYears.push(yearItem.year);
    //             });
    //         }
    //     });
    //     setYears(eventYears);
    //     setActiveYear(eventYears[eventYears.length - 1]);
    //     const event = data.find(item => item.title === activeTitle);
    //     const eventsForYear = event?.years.find(yearItem => yearItem.year === eventYears[eventYears.length - 1])?.events || [];
    //     setEventsData(eventsForYear);
    //     // console.log(eventsData);
    // }, [activeTitle]);

    // useEffect(() => {
    //     const event = data.find(item => item.title === activeTitle);
    //     const eventsForYear = event?.years.find(yearItem => yearItem.year === activeYear)?.events || [];
    //     setEventsData(eventsForYear);
    // }, [activeYear, activeTitle]);

    return (
        <>
            <div className="py-[4rem]">
                <div className="flex flex-col md:flex-row w-3/4 mx-auto justify-evenly items-center bg-gray-800 rounded-[50px] md:rounded-full">
                {titles?.map((_: string, index: number) => (
                    <div
                    key={index}
                    onClick={() => {changeEventTitle(_)}}
                    className={`transition-all w-full h-full text-center !py-4 rounded-full ${_ == activeTitle ? "active" : ""}`}
                    >
                    <button className="text-3xl capitalize">{_}</button>
                    </div>
                ))}
                </div>
                <br />
                <div className="flex flex-col md:flex-row w-3/4 mx-auto justify-evenly items-center bg-gray-800 rounded-[50px] md:rounded-full">
                {years?.map((_: any, index: number) => (
                    <div key={index} onClick={() => changeActiveYear(_)} className={`transition-all w-full h-full text-center !py-4 rounded-full ${_ == activeYear ? "active" : ""}`}>
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
            <div className="flex w-[90vw] m-auto min-h-[60vh] ">
                <div className="timeline box flex-[2]">
                {/* {props.timeline} */}
                <Timeline events={eventsData} selectedIndex={activeIndex} setActiveIndex={setActiveIndex} />
                <div id="gradient"></div>
                </div>
                <div className="flex-[3] hidden md:block">
                    {eventsData &&
                    <div className=" w-[80%] flex bg-[#AE9775] flex-col gap-4 px-[6rem] py-[7rem] text-black rounded-xl">
                        <h1 className="text-3xl font-bold">{eventsData[activeIndex].title}</h1>
                        <p>{eventsData[activeIndex].description}</p>
                        <p> Venue : {eventsData[activeIndex].location}</p>
                        <p> No of models : 10</p>

                        {/* <p>{data.startdate}</p> */}
                        {/* <p>{data.enddate}</p> */}

                        <div className="gallery flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">Event Gallery</h1>

                        <div className="grid grid-cols-3 w-[450px] gap-1">
                            {Array.from({ length: 6 }).map((_, index) => (
                            <GridTileImage
                                className=" m-auto object-center border-[1px] object-cover "
                                key={index}
                                src={eventsData[activeIndex].image}
                                alt={eventsData[activeIndex].title}
                                width={150}
                                height={150}
                            />
                            ))}
                        </div>
                        </div>

                        <div className="gallery flex flex-col gap-4">
                        <h1 className="text-3xl font-bold">Models in {eventsData[activeIndex].title}</h1>
                        <div className="grid grid-cols-3 w-[450px] gap-1">
                            {Array.from({ length: 6 }).map((_, index) => (
                            <GridTileImage
                                className=" m-auto object-center border-[1px] object-cover "
                                key={index}
                                src={eventsData[activeIndex].image}
                                alt={eventsData[activeIndex].title}
                                width={150}
                                height={150}
                            />
                            ))}
                        </div>
                        </div>
                    </div>}
                </div>
                {/* <div>{props.eventmodal}</div> */}
            </div>
        </>
    )
}

export default Events;