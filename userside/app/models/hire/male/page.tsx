import { DivImage } from "@/components/ui/DivImage";
import { GridTileImage } from "@/components/ui/GridImage";

export default function Page() {
  return (
    <div className="flex flex-col flex-wrap px-[6rem] gap-[4rem] py-[5rem]">
      <DivImage
        alt="contact"
        className="min-h-[40vh] w-[90vw] m-auto "
        innerClassName="flex items-center flex-col justify-center"
        active
        src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      >
        <h2>
          Your change to shine awaits.
          <span role="img" aria-label="star">
            ⭐
          </span>
        </h2>

        <h1 className="text-5xl">Male Models</h1>
      </DivImage>

      <div className="gallery flex gap-[4rem] flex-wrap">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="single flex flex-col w-[380px] gap-3">
            <GridTileImage
              src={
                "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              width={400}
              height={400}
              alt="hero active image"
            ></GridTileImage>
            <h2>Aayusha Pokhrel</h2>

            <span>Kathmandu nepal</span>
          </div>
        ))}
      </div>
    </div>
  );
}
