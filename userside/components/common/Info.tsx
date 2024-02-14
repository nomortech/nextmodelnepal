"use client"
import { useState } from "react";
import Button from "../factory/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function InfoDetails() {
  const router = useRouter();
  const [eventManagement, setEventManagement] = useState<boolean>(false);
  const [talentsManagement, setTalentsManagement] = useState<boolean>(false);
  const [otherservices, setOtherServices] = useState<boolean>(false);
  return (
    <section className="flex flex-col gap-[1rem] lg:gap-[5rem]">
      <div className="info-details flex flex-col md:flex-row responsive-padding mx-1 md:mx-[8rem] my-[4rem] bg-[#272727] gap-5  md:gap-[4rem] flex-wrap rounded-lg">
        <div className="flex flex-col justify-center md:w-[40%] gap-2">
          <h1 className="text-5xl font-bold text-balance">
            Dive into the world of modeling
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            provident minima odit voluptatum quod voluptatem magnam fuga,
            exercitationem amet expedita alias.
          </p>
          <div className="flex gap-3 flex-col md:flex-row">
            <Link href={"/models"}><Button>View All Models</Button></Link>
            <Link href={"/contact"}><Button variant="secondary">Become a Model</Button></Link>
          </div>
        </div>
        <div className="flex-1 relative md:min-h-[400px] min-h-[300px]">
          <Image
            src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your background image path
            alt="Background"
            width={500}
            sizes="(max-width: 768px) 100vw, 50vw"
            height={200}
            className="absolute w-64 md:w-3/4 z-10 right-0 top-0 border-[2px] rounded-xl border-[#AE9775]"
          />
          <Image
            src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Foreground"
            sizes="(max-width: 768px) 100vw, 50vw"
            width={400} // Set the size of the foreground image as needed
            height={400}
            className="absolute w-64 md:w-3/5 z-10 bottom-0 left-0 border-[2px] rounded-xl border-[#AE9775]  "
          />
        </div>
      </div>

      <div className="info-details flex flex-col md:flex-row responsive-padding mx-1 md:mx-[8rem] my-[4rem] bg-[#272727] gap-5 md:gap-[4rem] flex-wrap rounded-lg">
        <div className="flex flex-col justify-center w-full md:w-[40%] gap-2">
          <h1 className="text-5xl font-bold text-balance">
            Step into the Limelight
          </h1>
          <p>
          Embarking on a modeling career can be daunting. Don&apos;t let self-doubt hold you back. Our expert training and personalized guidance are designed to hone your skills and boost your confidence.
          </p>
          <div className="flex gap-3 flex-col md:flex-row">
            <Link href={"/models"}><Button>View All Models</Button></Link>
            <Link href={"/contact"}><Button variant="secondary">Become a Model</Button></Link>
          </div>
        </div>
        <div className="flex-1 relative md:min-h-[400px] min-h-[300px]">
          <Image
            src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your background image path
            alt="Background"
            width={500}
            sizes="(max-width: 768px) 100vw, 50vw"
            height={200}
            className="absolute w-64 md:w-3/4 z-10 right-0 top-0 border-[2px] rounded-xl border-[#AE9775]  "
          />
          <Image
            src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Foreground"
            sizes="(max-width: 768px) 100vw, 50vw"
            width={400} // Set the size of the foreground image as needed
            height={400}
            className="absolute w-64 md:w-3/5 z-10 bottom-0 left-0 border-[2px] rounded-xl border-[#AE9775]  "
          />
        </div>
      </div>

      <div id="event-management">
        <h2 className="text-5xl text-center font-bold">
          Dive into the World of Modeling
        </h2>
        <div className="info-details overflow-hidden relative bg-grid-lines flex px-[4rem] py-[2rem] mx-1 md:mx-[8rem] my-[4rem] bg-[#1D1B1B] border-[1px] gap-2 flex-wrap rounded-2xl">
          <div className="absolute h-[200px] w-[200px] bg-[#AE9775] filter blur-[200px] pointer-events-none"></div>
          <div className="flex flex-col justify-center flex-1 gap-4">
            <h1 className="text-5xl font-bold text-balance">
              Events Management xyz title
            </h1>
            <p>
              Discover how our event management team turns your visions into
              reality. Every event is a story waiting to be told.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => setEventManagement(!eventManagement)} variant="secondary" className="rounded-full">
                Learn more
              </Button>
            </div>
          </div>
          <div className="flex-1 relative min-h-[400px]">
            <Image
              src="/beach.jfif" // Replace with your background image path
              alt="Background"
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className=" border-[30px] rounded-xl object-cover object-center border-[#AE9775]  "
            />
          </div>
        </div>
      </div>
      <div id="event-modal" tabIndex={-1} aria-hidden="true" className={`${eventManagement ? "flex" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm`}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Event Management
              </h3>
              <button onClick={() => setEventManagement(!eventManagement)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Discover how our event management team turns your visions into
                reality. Every event is a story waiting to be told.  
              </p>
            </div>
            <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <Button onClick={() => router.push("/contact")} variant="secondary" className="rounded-full">
                Contact Us
              </Button>
              {/* <button data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[2rem] max-w-[90vw] m-auto ">
        {Array.from({ length: 2 }, (_, index) => (
          <div
            id={index == 0 ? "talent-management" : "other-services"}
            key={index}
            className="single relative bg-[#0E0E0E] overflow-hidden flex flex-col justify-start items-start p-2 md:p-[4rem] gap-[1.5rem] rounded-xl flex-1"
          >
            <div className="absolute top-32 h-[200px] w-[200px] bg-[#ae8c75]  filter blur-[250px] pointer-events-none"></div>

            <h1 className="text-6xl font-bold text-balance">
              {index == 0 ? "Talents Management" : "Other Services"}
            </h1>
            <p className="text-balance text-[1.2rem] text-tertiary">
              Discover how our event management team turns your visions into
              reality. Every event is a story waiting to be told.
            </p>
            <Button variant="secondary" className="rounded-full" onClick={() => {index == 0 ? setTalentsManagement(!talentsManagement) : setOtherServices(!otherservices)}}>
              Learn more
            </Button>
            <div className="relative min-h-[400px] w-full">
              <Image
                src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your background image path
                alt="Background"
                sizes="(max-width: 768px) 100vw, 50vw"
                fill
                className=" rounded-xl object-cover object-center border-[#AE9775]  "
              />
            </div>
          </div>
        ))}
      </div>
      <div id="talent-modal" tabIndex={-1} aria-hidden="true" className={`${talentsManagement ? "flex" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm`}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Talents Management
              </h3>
              <button onClick={() => setTalentsManagement(!talentsManagement)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Discover how our event management team turns your visions into
                reality. Every event is a story waiting to be told.  
              </p>
            </div>
            <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <Button onClick={() => router.push("/contact")} variant="secondary" className="rounded-full">
                Contact Us
              </Button>
              {/* <button data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> */}
            </div>
          </div>
        </div>
      </div>
      <div id="services-modal" tabIndex={-1} aria-hidden="true" className={`${otherservices ? "flex" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm`}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Other Services
              </h3>
              <button onClick={() => setOtherServices(!otherservices)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Discover how our event management team turns your visions into
                reality. Every event is a story waiting to be told.  
              </p>
            </div>
            <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <Button onClick={() => router.push("/contact")} variant="secondary" className="rounded-full">
                Contact Us
              </Button>
              {/* <button data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
