import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Navbar from "@/layouts/navbar/Navbar";

export default function MainFeaturedPost() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    []
  );

  return (
    <>
      <Navbar />
    </>
  );
}
