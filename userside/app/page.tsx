import Image from "next/image";
import Hero from "./sections/Hero";
import TextDetails from "@/components/common/text-details";
import Discover from "./sections/Discover";
import Contact from "@/components/pages/contact";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoSlider from "@/components/common/looper";

export default function Home() {
  return (
    <div className="landing-page">
      <Hero />
      {/* <TextDetails /> */}
      <Discover />
      <Contact />
      <LogoSlider />
    </div>
  );
}
