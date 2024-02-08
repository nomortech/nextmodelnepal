"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { GridTileImage } from "../ui/GridImage";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

const Events = ({events, eachEventData, params}: {events: any, eachEventData: any, params: string}) => {
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
                    event.id === params ? "" : ""
                )}
                onClick={() => setShowModal(!showModal)}
                // ref={event.id === params.slug ? activeref : null}
                >
                {/* <div className="bg-black rounded-full w-5 h-5 flex justify-center"></div> */}
                <div className="border-r-[2px] border[#AE9775] absolute h-full top-0 left-[45px] z-[-1]" />
                <Link
                    href={`/events/${event.id}`}
                    scroll={false}
                    prefetch={true}
                    className={twMerge(
                    " relative bg-[#AE9775] border bottom-[2px] border-[#AE9775] cursor-pointer grid place-content-center rounded-[50%] aspect-square w-[92px] h-[92px]",
                    event.id === params ? "bg-white" : ""
                    )}
                >
                    <Image
                    alt="asdf"
                    src={event.image}
                    className="rounded-full"
                    width={92}
                    height={92}
                    />
                </Link>

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
        {showModal && <div className="relative">
            <div className="fixed right-10 top-10 z-[100]">
                {/* <IconContext.Provider onClick> */}
                <div className="w-auto h-auto" onClick={() => setShowModal(!setShowModal)}>
                    <FaTimes size={50}/>
                </div>
                {/* </IconContext.Provider> */}
            </div>
        </div>}
        {eachEventData &&
        <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className={`${showModal ? "" : "hidden"} flex justify-center backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center mx-2 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full mt-[2rem] pt-[300px] md:hidden`}>
            <div className="flex bg-[#AE9775] flex-col gap-4 px-[1rem] pt-[140rem] text-black rounded-xl w-[90%]">
                <h1 className="text-3xl font-bold">{eachEventData.title}</h1>
                <p>{eachEventData.description}</p>
                <p> Venue : {eachEventData.location}</p>
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
                        src={eachEventData.image}
                        alt={eachEventData.title}
                        width={250}
                        height={250}
                        />
                    ))}
                    </div>
                </div>

                <div className="gallery flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">Models in {eachEventData.title}</h1>
                    <div className="grid grid-cols-1 w-auto gap-1">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <GridTileImage
                        className=" m-auto object-center border-[1px] object-cover "
                        key={index}
                        src={eachEventData.image}
                        alt={eachEventData.title}
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

export default Events;