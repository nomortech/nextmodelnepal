import TextDetails from "@/components/common/text-details";
import { GridTileImage } from "@/components/ui/GridImage";

export default function Events() {
  return (
    <div className="flex items-center flex-col py-[1rem]">
      <TextDetails
        title="Upcoming Events"
        subtitle="Next Models Nepal specializes in top-tier event management services in Nepal. We handle every detail, ensuring your event is flawless and memorable."
      />

      <div className="gallery flex gap-[4rem] flex-wrap">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="single flex flex-col w-[380px] gap-3">
            <GridTileImage
              src={
                "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              width={400}
              height={400}
              alt="hero active image"
            ></GridTileImage>
            <h2 className="text-3xl">Aayusha Pokhrel</h2>

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
