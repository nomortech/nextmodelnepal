"use client"
import { DivImage } from "@/components/ui/DivImage";
import { GridTileImage } from "@/components/ui/GridImage";
import { Checkbox, Menu, RangeSlider } from "@mantine/core";
import { BsFilterRight } from "react-icons/bs";

export default function Page() {
  return (
    <div className="flex flex-col flex-wrap px-2 md:px-[6rem] gap-[4rem] py-[5rem]">
      <DivImage
        alt="contact"
        className="min-h-[40vh] w-full mx-auto "
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

      <div className="flex justify-end items-center px-2 md:px-0">
        <Menu trigger="click" openDelay={100} closeDelay={400} position="bottom-end">
          <Menu.Target>
            <span className="cursor-pointer flex items-center gap-5" style={{fontSize: "30px"}}>Filter <BsFilterRight /></span>
          </Menu.Target>
          <Menu.Dropdown className="!bg-secondary !hover:bg-secondary" style={{width: "200px", textAlign: "center"}}>
            <Menu.Item>
              Age
              <RangeSlider minRange={1} min={18} max={45} step={1} defaultValue={[20, 27]} />
            </Menu.Item>
            <Menu.Item>
              Height
              <Checkbox
                className="pb-1"
                label="<= 5'"
              />
              <Checkbox
                className="pb-1"
                label={`> 5' and <= 5' 7"`}
              />
              <Checkbox
                className="pb-1"
                label={`> 5'7" and < 6'`}
              />
              <Checkbox
                className="pb-1"
                label={`> 6'`}
              />
            </Menu.Item>
            <Menu.Item>
              Experience
              <Checkbox
                className="pb-1"
                label="< 1 years"
              />
              <Checkbox
                className="pb-1"
                label="1 years to 3 years"
              />
              <Checkbox
                className="pb-1"
                label="> 3 years"
              />
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>

      <div className="gallery flex gap-[4rem] flex-wrap justify-between">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="single flex flex-col w-[380px] mx-auto gap-3">
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
