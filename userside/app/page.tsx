import Image from "next/image";
import Hero from "./sections/Hero";
import TextDetails from "@/components/common/text-details";
import Discover from "./sections/Discover";
import Contact from "@/components/pages/contact";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoSlider from "@/components/common/looper";
import Events from "./sections/Events";
import InfoDetails from "@/components/common/Info";
import Testimonials from "@/components/common/testimonials";

export default function Home() {
  return (
    <div className="landing-page">
      <Hero />
      {/* <TextDetails /> */}
      <Events />
      <Discover />
      <InfoDetails />
      <Testimonials />
      <Contact />
      <LogoSlider />
    </div>
  );
}
