import Button from "@/components/factory/Button";
import { DivImage } from "@/components/ui/DivImage";
import { GridTileImage } from "@/components/ui/GridImage";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Page() {
  // const router = useRouter();
  return (
    <div className="flex flex-wrap py-[4rem]">
      <div className="hidden md:flex-1 md:block">
        <GridTileImage
          key={1}
          alt="Gallery Image"
          className="rounded-lg m-auto object-center object-cover h-full"
          width={540}
          height={1040}
          src={`https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&ixid=1`}
        />
      </div>
      <div className="flex flex-col flex-1 m-auto gap-5 px-[3rem]">
        <h2 className="text-5xl ">Anand Shah Model</h2>
        <hr className="hr-horizontal max-w-[300px]" />
        <p>
          Meet Anand Shah, the embodiment of style and charisma. Anand is a
          rising star in the modeling world, known for his captivating presence
          on the runway and in front of the camera. With a unique blend of
          versatility and charm, he continues to leave a lasting impression in
          the fashion industry. Stay tuned for more from this promising talent
          as he paves his way to the top.
        </p>
        <div className="flex gap-3">
          <Link href={"/hire"}>
            <Button variant="secondary">Hire Model</Button>
          </Link>
          <Link href={"/contact"}>
            <Button>Contact Us</Button>
          </Link>
        </div>
        <div className="flex-1 md:hidden">
          <GridTileImage
            key={1}
            alt="Gallery Image"
            className="rounded-lg m-auto object-center object-cover h-full"
            width={540}
            height={1040}
            src={`https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&ixid=1`}
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl">Gallery</h2>
          <hr className="hr-horizontal max-w-[200px]" />
          <div className="gallery flex gap-4 flex-wrap">
            {Array.from({ length: 6 }, (_, index) => (
              <GridTileImage
                key={index}
                alt="Gallery Image"
                className="rounded-lg aspect-square object-center object-cover w-[150px] md:w-[300px] mx-auto sm:mx-0"
                width={500}
                height={500}
                src={`https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&ixid=${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}