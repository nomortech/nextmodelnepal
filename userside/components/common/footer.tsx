import Image from "next/image";
import Link from "next/link";
import { GridTileImage } from "../ui/GridImage";

export default function Footer() {
  return (
    <div className="bg-black w-full">
      <div className="flex flex-col md:flex-row gap-[3rem] py-5 md:py-[8rem] items-start md:items-end w-[90vw] m-auto">
        <div className=" ">
          <div className="logo">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={100}
              height={100}
            ></Image>
          </div>

          <p className="py-2">We are next models no 1 modeling agency in Nepal.</p>
          <p>Anamnagar, Kathmandu Nepal</p>
          <p>Anamnagar, Baneshwor Nepal</p>
        </div>
        
        <div>
          <div className="flex flex-col justify-start gap-2">
            <h1 className="text-xl pb-3">Quick Links</h1>
            <Link href={"/"} className="relative">
              <div className="border-b border-white w-16 absolute bottom-0 left-0"></div>
              Become a model
            </Link>
            <Link href={"/"} className="relative">
              <div className="border-b border-white w-16 absolute bottom-0 left-0"></div>
              Event Management
            </Link>
            <Link href={"/"} className="relative">
              <div className="border-b border-white w-16 absolute bottom-0 left-0"></div>
              Our Models
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl pb-3">Others</h1>
          <Link href={"/"} className="relative capitalize">
            <div className="border-b border-white w-16 absolute bottom-0 left-0"></div>
            About Next models nepal
          </Link>
          <Link href={"/"} className="relative capitalize">
            <div className="border-b border-white w-16 absolute bottom-0 left-0"></div>
            Contact Next models nepal
          </Link>
          <Link href={"/"} className="relative">
            <div className="border-b border-white w-16 absolute bottom-0 left-0"></div>
            Our gallery
          </Link>
        </div>
        <div className="flex flex-col">
          <h1>Creating Unforgetable Moments</h1>
          <div className="flex gap-3 w-[auto] overflow-x-scroll">
            {Array.from({ length: 3 }).map((_, index) => (
              <GridTileImage
                key={index}
                src={
                  "/model-4.webp"
                }
                alt="asdf"
                width={150}
                height={150}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-700 text-white text-center py-3">Copyright © 2023 NextModelNepal by Nomor Tech. All Rights Reserved.</div>
    </div>
  );
}
