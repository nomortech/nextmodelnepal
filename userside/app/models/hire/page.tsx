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

      

      <div className="flex justify-end items-center">
        Filter By: {" "}&nbsp;
        <select id="gender" className="w-1/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>&nbsp;
        <select id="age" className="w-1/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Age</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
        </select>&nbsp;
        <select id="height" className="w-1/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Height</option>
          <option value="18">5'7" - 5'9"</option>
          <option value="19">5'10" - 6'</option>
          <option value="20">6' - 6'2"</option>
          <option value="21">6'3" - 6'5"</option>
        </select>&nbsp;
        <select id="experience" className="w-1/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Experience</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

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
