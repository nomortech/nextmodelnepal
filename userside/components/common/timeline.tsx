"use client"
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";
import { GridTileImage } from "../ui/GridImage";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

const Timeline = ({events, selectedIndex, setActiveIndex}: {events: any, selectedIndex: number, setActiveIndex: Dispatch<SetStateAction<number>>}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <div className="flex flex-col items-center">
        {events &&
            events.map((event: any, index: number) => (
            <div
                key={index}
                className="relative last:mb-[10rem] first:pt-[10rem]"
            >
                <div
                className={twMerge(
                    "flex items-center mb-4 w-[300px] min-h-[250px] ",
                )}
                onClick={() => {
                    setShowModal(!showModal);
                    setActiveIndex(index);
                }}
                // ref={event.id === params.slug ? activeref : null}
                >
                {/* <div className="bg-black rounded-full w-5 h-5 flex justify-center"></div> */}
                <div className="border-r-[2px] border[#AE9775] absolute h-full top-0 left-[45px] z-[-1]" />
                <div
                    className={twMerge(
                    " relative bg-[#AE9775] border bottom-[2px] border-[#AE9775] cursor-pointer grid place-content-center rounded-[50%] aspect-square w-[92px] h-[92px]",
                    )}
                >
                    <Image
                    alt="asdf"
                    src={event.image}
                    className="rounded-full"
                    width={92}
                    height={92}
                    />
                </div>

                {/* <div
                    onClick={() => handleLinkClick(event.id)}
                    className={twMerge(
                    "bg-white border bottom-[2px] border-black text-black cursor-pointer w-[20px] h-[20px] p-[20px] grid place-content-center  rounded-full",
                    event.id === params.slug ? "bg-black text-white" : ""
                    )}
                >
                    {index + 1}
                </div> */}
                <div className="ml-4">
                    <h2 className="text-lg font-bold">{event.title}</h2>
                    <span>{event.location}</span>
                    <p className="text-white">
                    {event.description.substring(0, 10)}
                    </p>
                </div>
                </div>
            </div>
            ))}
        </div>
        {showModal && <div className="relative md:hidden">
            <div className="fixed right-10 top-10 z-[100]">
                {/* <IconContext.Provider onClick> */}
                <div className="w-auto h-auto" onClick={() => setShowModal(!setShowModal)}>
                    <FaTimes size={50}/>
                </div>
                {/* </IconContext.Provider> */}
            </div>
        </div>}
        {selectedIndex &&
        <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className={`${showModal ? "" : "hidden"} flex justify-center backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center mx-2 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full mt-[2rem] pt-[400px] md:hidden`}>
            <div className="flex bg-[#AE9775] flex-col gap-4 px-[1rem] pt-[140rem] text-black rounded-xl w-[90%]">
                <h1 className="text-3xl font-bold">{events[selectedIndex].title}</h1>
                <p>{events[selectedIndex].description}</p>
                <p> Venue : {events[selectedIndex].location}</p>
                <p> No of models : 10</p>

                {/* <p>{data.startdate}</p>
                {/* <p>{data.enddate}</p> */}

                <div className="gallery flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">Event Gallery</h1>

                    <div className="grid grid-cols-1 w-auto gap-1">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <GridTileImage
                        className="m-auto object-center border-[1px] object-cover "
                        key={index}
                        src={events[selectedIndex].image}
                        alt={events[selectedIndex].title}
                        width={250}
                        height={250}
                        />
                    ))}
                    </div>
                </div>

                <div className="gallery flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">Models in {events[selectedIndex].title}</h1>
                    <div className="grid grid-cols-1 w-auto gap-1">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <GridTileImage
                        className=" m-auto object-center border-[1px] object-cover "
                        key={index}
                        src={events[selectedIndex].image}
                        alt={events[selectedIndex].title}
                        width={250}
                        height={250}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Timeline;