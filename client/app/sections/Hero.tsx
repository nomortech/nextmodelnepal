import Button from "@/components/factory/Button";
import { Modal } from "@mantine/core";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero relative w-[90vw] m-auto min-h-[60vh] flex items-center bg-[url('/hero.png')] bg-cover bg-center">
      {/* <Image src="/hero.png" alt="hero" className="absolute z-[-1] inset-0" /> */}
      <div className="flex flex-col justify-center gap-2 pl-[10vw] max-w-[70%] py-[10vh] ">
        <h1 className="font-bold">We’re Next Model Nepal</h1>
        <h2 className="text-[3rem] leading-tight tracking-tighter font-semibold">
          Nepal’s No.1 Model Agency
        </h2>
        <p>
          At Next Models Nepal, we are a dynamic team of professional event and
          talent management experts, dedicated to providing top-tier training
          and a launchpad for aspiring models.
        </p>
        <div className="flex gap-2">
          <Button>Button Text</Button>
          <Button variant="secondary">Button Text</Button>
        </div>
      </div>
    </div>
  );
}
