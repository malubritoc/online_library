import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Image from "next/image";
import banner1 from "@/assets/home/banners/banner1.png";
import banner2 from "@/assets/home/banners/banner2.png";

export function HomeBannersSlider() {
  const banners = [banner1, banner2];
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
      },
    },
    [
      (slider) => {
        let timeout: any;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="flex items-center justify-center">
      <div className="keen-slider flex overflow-hidden" ref={sliderRef}>
        {banners.map((banner, i) => {
          return (
            <div
              className={`keen-slider__slide number-slide${
                i + 1
              } w-screen rounded-[18px] overflow-hidden`}
            >
              <Image
                src={banner}
                alt="Banner"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
