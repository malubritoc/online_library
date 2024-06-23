import { useState } from "react";

export function ProductVariations() {
  const [selectedVariation, setSelectedVariation] = useState(0);
  const variations = ["Capa dura", "Capa brochura", "Kindle"];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">Variação</h3>
      <div className="flex gap-2">
        {variations.map((variation, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSelectedVariation(idx)}
              data-selected={selectedVariation == idx}
              className="px-3 py-2 border border-[#45474F] rounded-md text-sm text-[#45474F] data-[selected=true]:bg-green-main data-[selected=true]:border-[#279FB7] data-[selected=true]:text-white"
            >
              {variation}
            </button>
          );
        })}
      </div>
    </div>
  );
}
