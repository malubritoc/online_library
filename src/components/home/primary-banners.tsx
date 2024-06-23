import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Image from "next/image";
import banner1 from "@/assets/home/banners/banner1.png";
import banner2 from "@/assets/home/banners/banner2.png";
import clsx from "clsx";

export function HomeBannersSlider() {
  const banners = [banner1, banner2];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
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
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-center justify-center">
        <div
          className="keen-slider w-full flex overflow-hidden"
          ref={sliderRef}
        >
          {banners.map((banner, idx) => {
            return (
              <div
                key={idx}
                className={`keen-slider__slide number-slide${
                  idx + 1
                } w-full rounded-[18px] overflow-hidden`}
              >
                <Image
                  src={banner}
                  alt="Banner"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
      {instanceRef.current && (
        <div className="flex justify-center items-center">
          {banners.map((banner, idx) => {
            return (
              <button
                key={idx}
                data-active={currentSlide === idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={clsx(
                  "border-none w-2 h-2 bg-black bg-opacity-50 rounded-full mx-1 cursor-pointer",
                  "focus:outline-none data-[active=true]:bg-green-main data-[active=true]:bg-opacity-1"
                )}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
