// "use client";

// import { fetcher } from "@/app/utils/fetch";
import Link from "next/link";
import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import useSWR from "swr";
// import { usePathname, useRouter } from "next/navigation";

import { twMerge } from "tailwind-merge";

async function getData() {
  const res = await fetch(
    "https://65939c9c1493b0116068c69d.mockapi.io/api/events/events"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  // const router = useRouter();
  // const pathname = usePathname();

  const events = await getData();

  // const {
  //   data: events,
  //   error,
  //   isLoading,
  // } = useSWR(
  //   "https://65939c9c1493b0116068c69d.mockapi.io/api/events/events",
  //   (url) => axios.get(url).then((res) => res.data)
  // );

  // const activeref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (activeref.current) {
  //     // Check if the navigation type is 'reload' or 'undefined' (location change)

  //     console.log(performance.getEntriesByType("navigation")[0]);

  //     const isPageReload = performance.navigation.type === 1; // 1 represents PAGE_RELOAD
  //     const isLocationChange = performance.navigation.type === 0; // 0 represents TYPE_NAVIGATE
  //     if (isPageReload) {
  //       console.log("Page is reloaded");
  //       // Do something specific for page reload
  //     } else if (isLocationChange) {
  //       const el = activeref.current;
  //       el.scrollIntoView({ behavior: "smooth", block: "start" });
  //       console.log("Location is changed");
  //       // Do something specific for location change
  //     }
  //   }
  // }, [isLoading, pathname, params.slug]);

  // useEffect(() => {
  //   if (activeref.current) {
  //     const el = activeref.current;
  //     // el.scrollIntoView({ behavior: "smooth", block: "start" });
  //     el.scrollIntoView({
  //       block: "start",
  //       behavior: "smooth",
  //     });
  //   }
  // }, [events]);

  // const handleLinkClick = (eventID: string) => {
  //   router.replace(`/events/${eventID}`);
  // };

  return (
    <div className="flex flex-col items-center">
      {events &&
        events.map((event, index) => (
          <div
            key={index}
            className="relative last:mb-[10rem] first:pt-[10rem]"
          >
            <div
              className={twMerge(
                "flex items-center mb-4 w-[300px] min-h-[250px] ",
                event.id === params.slug ? "" : ""
              )}
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
                  event.id === params.slug ? "bg-white" : ""
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
  );
}
