import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import clsx from "clsx";

export function MediaSlider({ medias }: { medias: any[] }) {
  const [slides, setSlides] = useState<any[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  console.log(medias);

  const [sliderRef, sliderControl] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentIdx(slider.track.details.rel);
    },
  });
  useEffect(() => {
    setTimeout(() => {
      console.log("acessou");
      setSlides(medias), 1000;
    });
  }, [medias]);

  return medias?.length > 0 ? (
    <div className="flex flex-col gap-2 w-[400px] ">
      <div ref={sliderRef} className="keen-slider flex w-full overflow-hidden">
        {medias?.map((media, idx) => {
          return (
            <div
              key={idx}
              className={`relative keen-slider__slide number-slide${idx} w-[400px]`}
            >
              <img src={media} alt="media" className="w-[400px] object-cover" />
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-start gap-6">
        {medias?.map((media, idx) => {
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
              <img src={media} alt="media" width="82" key={idx} />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div>Carregando..</div>
  );
}
