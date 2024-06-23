import clsx from "clsx";
import { useState } from "react";

export function ProductColors({
  colors,
}: {
  colors?: { name: string; hex: string }[];
}) {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">Cor: </h3>
      <div className="grid grid-cols-8 gap-6">
        {colors?.map((color, idx) => {
          return (
            <div
              key={idx}
              data-white={color.hex === "#FFFFFF"}
              data-selected={selectedColor == idx}
              onClick={() => setSelectedColor(idx)}
              style={{ backgroundColor: color.hex }}
              className={clsx(
                "w-8 h-8 rounded-full",
                "data-[white=true]:border data-[white=true]:border=[#ECECEC]",
                "data-[selected=true]:outline  outline-offset-2 outline-2 outline-black",
                "cursor-pointer"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
