import TextDetails from "@/components/common/text-details";
import { GridTileImage } from "@/components/ui/GridImage";

export default function Events() {
  return (
    <div className="flex items-center flex-col py-[1rem]">
      <TextDetails
        title="Upcoming Events"
        subtitle="Next Models Nepal specializes in top-tier event management services in Nepal. We handle every detail, ensuring your event is flawless and memorable."
      />

      <div className="gallery flex items-center justify-center gap-[2rem] md:gap-[4rem] flex-wrap">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="single flex flex-col w-[300px] gap-3">
            <GridTileImage
              src={
                "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={400}
              height={400}
              alt="hero active image"
            ></GridTileImage>
            <h2 className="text-3xl relative">
              <div className="border-b border-white w-16 absolute bottom-0 left-0"></div>
              Mr. Nepal
            </h2>

            <span className="text-tertiary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>
            <span>2023-03-12</span>
          </div>
        ))}
      </div>
    </div>
  );
}
