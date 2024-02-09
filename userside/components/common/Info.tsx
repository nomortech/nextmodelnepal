import Button from "../factory/Button";
import Image from "next/image";

export default function InfoDetails() {
  return (
    <section className="flex flex-col gap-[1rem] lg:gap-[5rem]">
      <div className="info-details flex flex-col md:flex-row responsive-padding mx-1 md:mx-[8rem] my-[4rem] bg-[#272727] gap-5  md:gap-[4rem] flex-wrap rounded-lg">
        <div className="flex flex-col justify-center md:w-[40%] gap-2">
          <h1 className="text-5xl font-bold text-balance">
            Dive into the world of modeling
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            provident minima odit voluptatum quod voluptatem magnam fuga,
            exercitationem amet expedita alias.
          </p>
          <div className="flex gap-3 flex-col md:flex-row">
            <Button>View All Models</Button>
            <Button variant="secondary">Become a Models</Button>
          </div>
        </div>
        <div className="flex-1 relative md:min-h-[400px] min-h-[300px]">
          <Image
            src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your background image path
            alt="Background"
            width={500}
            sizes="(max-width: 768px) 100vw, 50vw"
            height={200}
            className="absolute w-64 md:w-3/4 z-10 right-0 top-0 border-[2px] rounded-xl border-[#AE9775]"
          />
          <Image
            src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Foreground"
            sizes="(max-width: 768px) 100vw, 50vw"
            width={400} // Set the size of the foreground image as needed
            height={400}
            className="absolute w-64 md:w-3/5 z-10 bottom-0 left-0 border-[2px] rounded-xl border-[#AE9775]  "
          />
        </div>
      </div>

      <div className="info-details flex flex-col md:flex-row responsive-padding mx-1 md:mx-[8rem] my-[4rem] bg-[#272727] gap-5 md:gap-[4rem] flex-wrap rounded-lg">
        <div className="flex flex-col justify-center w-full md:w-[40%] gap-2">
          <h1 className="text-5xl font-bold text-balance">
            Step into the Limelight
          </h1>
          <p>
          Embarking on a modeling career can be daunting. Don't let self-doubt hold you back. Our expert training and personalized guidance are designed to hone your skills and boost your confidence.
          </p>
          <div className="flex gap-3 flex-col md:flex-row">
            <Button>View All Models</Button>
            <Button variant="secondary">Become a Models</Button>
          </div>
        </div>
        <div className="flex-1 relative md:min-h-[400px] min-h-[300px]">
          <Image
            src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your background image path
            alt="Background"
            width={500}
            sizes="(max-width: 768px) 100vw, 50vw"
            height={200}
            className="absolute w-64 md:w-3/4 z-10 right-0 top-0 border-[2px] rounded-xl border-[#AE9775]  "
          />
          <Image
            src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Foreground"
            sizes="(max-width: 768px) 100vw, 50vw"
            width={400} // Set the size of the foreground image as needed
            height={400}
            className="absolute w-64 md:w-3/5 z-10 bottom-0 left-0 border-[2px] rounded-xl border-[#AE9775]  "
          />
        </div>
      </div>

      <div id="event-management">
        <h2 className="text-5xl text-center font-bold">
          Dive into the World of Modeling
        </h2>
        <div className="info-details overflow-hidden z-[-1] relative bg-grid-lines flex px-[4rem] py-[2rem] mx-1 md:mx-[8rem] my-[4rem] bg-[#1D1B1B] border-[1px] gap-2 flex-wrap rounded-2xl">
          <div className="absolute z-[-1] h-[200px] w-[200px] bg-[#AE9775] filter blur-[200px] pointer-events-none"></div>
          <div className="flex flex-col justify-center flex-1 gap-4">
            <h1 className="text-5xl font-bold text-balance">
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
              src="/beach.jfif" // Replace with your background image path
              alt="Background"
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className=" border-[30px] rounded-xl object-cover object-center border-[#AE9775]  "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[2rem] max-w-[90vw] m-auto ">
        {Array.from({ length: 2 }, (_, index) => (
          <div
            id={index == 0 ? "talent-management" : "other-services"}
            key={index}
            className="single relative z-[-1] bg-[#0E0E0E] overflow-hidden flex flex-col justify-start items-start p-2 md:p-[4rem] gap-[1.5rem] rounded-xl flex-1"
          >
            <div className="absolute z-[-1] top-32 h-[200px] w-[200px] bg-[#ae8c75]  filter blur-[250px] pointer-events-none"></div>

            <h1 className="text-6xl font-bold text-balance">
              {index == 0 ? "Talents Management" : "Other Services"}
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
    </section>
  );
}
