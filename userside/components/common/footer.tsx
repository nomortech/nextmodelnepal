import Image from "next/image";
import Link from "next/link";
import { GridTileImage } from "../ui/GridImage";

export default function Footer() {
  return (
    <div className="bg-black w-full">
      <div className=" flex gap-[3rem] py-[8rem] items-end w-[90vw] m-auto">
        <div className=" ">
          <div className="logo">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={100}
              height={100}
            ></Image>
          </div>

          <p>We are next models no 1 modeling agency in Nepal.</p>
          <p>Anamnagar, Kathmandu Nepal</p>
          <p>Anamnagar, Baneshwor Nepal</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Quick Links</h1>
          <Link href={"/"}>Become a model</Link>
          <Link href={"/"}>Event Management</Link>
          <Link href={"/"}>Our Models</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h1>Others</h1>
          <Link href={"/"}>About Next models nepal</Link>
          <Link href={"/"}>Contact Next models nepal</Link>
          <Link href={"/"}>Our gallery</Link>
        </div>
        <div className="flex flex-col">
          <h1>Creating Unforgetable Moments</h1>
          <div className="flex gap-3 w-[900px] overflow-x-scroll">
            {Array.from({ length: 5 }).map((_, index) => (
              <GridTileImage
                key={index}
                src={
                  "https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt="asdf"
                width={150}
                height={150}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
