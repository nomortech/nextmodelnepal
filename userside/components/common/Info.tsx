import Button from "../factory/Button";
import Image from "next/image";

export default function InfoDetails() {
  return (
    <section className="flex flex-col gap-[5rem]">
      <div className="info-details flex p-[4rem] m-[8rem] bg-[#272727] gap-[4rem] flex-wrap rounded-lg">
        <div className="flex flex-col justify-center flex-1 gap-4">
          <h1 className="text-6xl font-bold text-balance">
            Dive into the world of modeling
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            provident minima odit voluptatum quod voluptatem magnam fuga,
            exercitationem amet expedita alias.
          </p>
          <div className="flex gap-3">
            <Button>View All Models</Button>
            <Button variant="secondary">Become a Models</Button>
          </div>
        </div>
        <div className="flex-1 relative min-h-[400px]">
          <Image
            src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your background image path
            alt="Background"
            width={500}
            sizes="(max-width: 768px) 100vw, 50vw"
            height={200}
            className="absolute z-10 right-0 top-0 border-[2px] rounded-xl border-[#AE9775]  "
          />
          <Image
            src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Foreground"
            sizes="(max-width: 768px) 100vw, 50vw"
            width={400} // Set the size of the foreground image as needed
            height={400}
            className="absolute z-10 bottom-0 left-0 border-[2px] rounded-xl border-[#AE9775]  "
          />
        </div>
      </div>

      <div>
        <h2 className="text-5xl text-center font-bold">
          Dive into the World of Modeling
        </h2>
        <div className="info-details overflow-hidden z-[-1] relative bg-grid-lines  flex p-[4rem] m-[8rem] bg-[#1D1B1B] border-[1px] gap-[4rem] flex-wrap rounded-2xl">
          <div className="absolute z-[-1] h-[200px] w-[200px] bg-[#AE9775]  filter blur-[200px] pointer-events-none"></div>

          <div className="flex flex-col justify-center flex-1 gap-4">
            <h1 className="text-6xl font-bold text-balance">
              Events Management xyz title
            </h1>
            <p>
              Discover how our event management team turns your visions into
              reality. Every event is a story waiting to be told.
            </p>
            <div className="flex gap-3">
              <Button variant="secondary" className="rounded-full">
                Learn more
              </Button>
            </div>
          </div>
          <div className="flex-1 relative min-h-[400px]">
            <Image
              src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your background image path
              alt="Background"
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className=" border-[30px] rounded-xl object-cover object-center border-[#AE9775]  "
            />
          </div>
        </div>
      </div>

      <div className="flex gap-[2rem] max-w-[90vw] m-auto ">
        {Array.from({ length: 2 }, (_, index) => (
          <div
            key={index}
            className="single relative  z-[-1] bg-[#0E0E0E] overflow-hidden flex flex-col justify-start items-start p-[4rem] gap-[1.5rem] rounded-xl flex-1"
          >
            <div className="absolute z-[-1] top-32 h-[200px] w-[200px] bg-[#ae8c75]  filter blur-[250px] pointer-events-none"></div>

            <h1 className="text-6xl font-bold text-balance">
              Talents Management
            </h1>
            <p className="text-balance text-[1.2rem] text-tertiary">
              Discover how our event management team turns your visions into
              reality. Every event is a story waiting to be told.
            </p>
            <Button variant="secondary" className="rounded-full">
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

      <h1 className="text-[10vw] font-bold text-[#AE97750D] w-full text-center block">
        Next Models Nepal
      </h1>
    </section>
  );
}
