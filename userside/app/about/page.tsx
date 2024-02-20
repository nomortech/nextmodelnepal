import TextDetails from "@/components/common/text-details";
import { GridTileImage } from "@/components/ui/GridImage";

export default function Page() {
  return (
    <div className="relative min-h-[30vh]">
      <div className="  bg-grid-sm-lines opacity-25 absolute inset-0 -z-10"></div>
      <TextDetails
        title="About Us"
        subtitle="We are next models nepal we are here to make you a better model of the year!"
      />
      <div className="relative w-[90vw] h-[60vh] m-auto  translate-y-[50px]">
        <GridTileImage
          src={
            "/about-image.jpeg"
          }
          alt="image"
          className=" object-cover object-center  rounded-xl "
          fill
        />
      </div>

      <div className="bg-white text-black py-[5rem]">
        <div className="min-h-[30vh] pt-[50px] flex flex-wrap items-center justify-center gap-[5rem]">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="flex flex-col gap-5" key={index}>
              <h2>Customer Satisfaction</h2>
              <h1 className="text-5xl font-bold">90%</h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row max-w-[90vw] md:max-w-[60vw] m-auto gap-4 pt-[5rem] md:py-[5rem] ">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-balance">
              We are Next model nepal and we are here to make the nepal a best.
            </h1>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-4xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              veritatis.
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique maxime nam eum libero delectus quod repudiandae nihil
              ea. Aut ullam tenetur, obcaecati animi voluptate asperiores beatae
              minima vitae impedit cupiditate natus adipisci distinctio
              quisquam, eaque consectetur eum labore quas, consequuntur ratione
              assumenda. Tempore laboriosam et labore voluptatem, vel ut
              consequuntur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
