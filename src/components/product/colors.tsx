import { useState } from "react";

export function ProductColors() {
  const [selectedColor, setSelectedColor] = useState(0);
  const colors = [
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#C0C0C0",
    "#808080",
    "#800000",
    "#808000",
    "#008000",
    "#800080",
    "#008080",
    "#000080",
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">Cor: </h3>
      <div className="grid grid-cols-8 gap-6">
        {colors.map((color, idx) => {
          return (
            <div
              key={idx}
              data-selected={selectedColor == idx}
              onClick={() => setSelectedColor(idx)}
              style={{ backgroundColor: color }}
              className="w-8 h-8 rounded-full data-[selected=true]:outline  outline-offset-2 outline-2 outline-black cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
}
