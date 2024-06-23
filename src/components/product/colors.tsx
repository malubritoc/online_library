import { useState } from "react";

export function ProductColors() {
  const [selectedColor, setSelectedColor] = useState(0);
  const colors = [
    { name: "Azul", hex: "#4169E1" },
    { name: "Vermelho", hex: "#FF0000" },
    { name: "Verde", hex: "#008000" },
    { name: "Amarelo", hex: "#FFFF00" },
    { name: "Roxo", hex: "#800080" },
    { name: "Preto", hex: "#000000" },
    { name: "Branco", hex: "#FFFFFF" },
    { name: "Cinza", hex: "#808080" },
    { name: "Marrom", hex: "#8B4513" },
    { name: "Laranja", hex: "#FFA500" },
    { name: "Rosa", hex: "#FFC0CB" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">Cor: {colors[selectedColor].name}</h3>
      <div className="grid grid-cols-8 gap-6">
        {colors.map((color, idx) => {
          return (
            <div
              key={idx}
              data-white={color.hex === "#FFFFFF"}
              data-selected={selectedColor == idx}
              onClick={() => setSelectedColor(idx)}
              style={{ backgroundColor: color.hex }}
              className="w-8 h-8 rounded-full data-[white=true]:border data-[white=true]:border=[#ECECEC] data-[selected=true]:outline  outline-offset-2 outline-2 outline-black cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
}
