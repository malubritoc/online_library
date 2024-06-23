import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export function MediaSlider({ medias }: { medias: any[] }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const [sliderRef, sliderControl] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentIdx(slider.track.details.rel);
    },
  });

  return (
    <div className="flex flex-col gap-2 w-full">
      <div ref={sliderRef} className="keen-slider flex w-full overflow-hidden">
        {medias.map((media, idx) => {
          return (
            <div
              key={idx}
              className={`relative keen-slider__slide number-slide${idx} w-full`}
            >
              <Image
                src={media}
                alt="media"
                objectFit="cover"
                className="w-full"
              />
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-start gap-6">
        {medias.map((media, idx) => {
          return (
            <div
              key={idx}
              data-active={currentIdx == idx}
              className={clsx(
                "data-[active=true]:border-[3px] data-[active=true]:border-green-main",
                "rounded-md cursor-pointer"
              )}
              onClick={() => sliderControl.current?.moveToIdx(idx)}
            >
              <Image
                src={media}
                alt="media"
                objectFit="cover"
                width="82"
                key={idx}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
