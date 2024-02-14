import TextDetails from "@/components/common/text-details";
import Button from "@/components/factory/Button";
import { GridTileImage } from "@/components/ui/GridImage";
import Link from "next/link";

export default function Discover() {
  return (
    <div className="py-[5rem] md:py-[10rem] flex flex-col gap-8 items-center">
      <TextDetails
        title="Discover our Dazzlings models"
        subtitle="Explore our portfolio of diverse and talented models, each ready to redefine the world of fashion and entertainment."
      />
      <div className="flex flex-col md:flex-row items-center gap-[5rem] justify-items-center justify-center ">
        <div className="flex flex-col items-center  gap-[2rem]">
          <h2 className="text-4xl text-center">Female Models</h2>
          <div className="flex flex-wrap items-center gap-[5rem] justify-center">
            <div className="single flex flex-col w-[150px] gap-2">
              <GridTileImage
                src={
                  "https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?cs=srgb&dl=pexels-samarth-singhai-1193942.jpg&fm=jpg"
                }
                width={200}
                height={200}
                alt="hero active image"
              ></GridTileImage>
              <h2>Aayusha Pokhrel</h2>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet, consectetur
              </p>

              <span className="text-tertiary">2023-03-12</span>
            </div>
            <div className="single flex flex-col w-[150px] gap-2">
              <GridTileImage
                src={
                  "https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?cs=srgb&dl=pexels-samarth-singhai-1193942.jpg&fm=jpg"
                }
                width={200}
                height={200}
                alt="hero active image"
              ></GridTileImage>
              <h2>Aayusha Pokhrel</h2>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet, consectetur
              </p>

              <span>2023-03-12</span>
            </div>
            <div className="single flex flex-col w-[150px] gap-2">
              <GridTileImage
                src={
                  "https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?cs=srgb&dl=pexels-samarth-singhai-1193942.jpg&fm=jpg"
                }
                width={200}
                height={200}
                alt="hero active image"
              ></GridTileImage>
              <h2>Aayusha Pokhrel</h2>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet, consectetur
              </p>

              <span>2023-03-12</span>
            </div>
          </div>
        </div>

        <hr className="hr-vertical hidden md:block" />

        <div className="flex flex-col items-center gap-[2rem]">
          <h2 className="text-4xl text-center">Male Models</h2>
          <div className="flex flex-wrap items-center gap-[5rem] justify-center">
            <div className="single flex flex-col w-[150px] gap-2">
              <GridTileImage
                src={
                  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
                }
                width={200}
                height={200}
                alt="hero active image"
              ></GridTileImage>
              <h2>Aayusha Pokhrel</h2>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet, consectetur
              </p>

              <span>2023-03-12</span>
            </div>

            <div className="single flex flex-col w-[150px] gap-2">
              <GridTileImage
                src={
                  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
                }
                width={200}
                height={200}
                alt="hero active image"
              ></GridTileImage>
              <h2>Aayusha Pokhrel</h2>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet, consectetur
              </p>

              <span>2023-03-12</span>
            </div>

            <div className="single flex flex-col w-[150px] gap-2">
              <GridTileImage
                src={
                  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
                }
                width={200}
                height={200}
                alt="hero active image"
              ></GridTileImage>
              <h2>Aayusha Pokhrel</h2>
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet, consectetur
              </p>

              <span>2023-03-12</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-evenly">
        <Button variant="secondary">
          <Link href="/models/female">View Female Models</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/models">View all Model</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/models/male">View Male Model</Link>
        </Button>
      </div>
    </div>
  );
}
