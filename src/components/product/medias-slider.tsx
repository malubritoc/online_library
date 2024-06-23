import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Image from "next/image";

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

  console.log(sliderControl);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div ref={sliderRef} className="keen-slider flex overflow-hidden">
        {medias.map((media, idx) => {
          return (
            <div
              key={idx}
              className={`relative keen-slider__slide number-slide${idx}`}
            >
              <Image src={media} alt="media" objectFit="cover" />
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-start gap-6">
        {medias.map((media, idx) => {
          return (
            <div
              data-active={currentIdx == idx}
              className="data-[active=true]:border-[3px] data-[active=true]:border-green-main rounded-md cursor-pointer"
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
