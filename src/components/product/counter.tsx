import { MinusIcon } from "@/assets/product/minus";
import { PlusIcon } from "@/assets/product/plus";
import clsx from "clsx";
import { useState } from "react";

export function Counter() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className={clsx(
        "w-fit flex items-center justify-between gap-3 h-fit px-3 py-1 ",
        "border border-[#45474F] rounded-[6px] text-gray-900"
      )}
    >
      <button onClick={() => setQuantity(quantity - 1)}>
        <MinusIcon />
      </button>
      <input
        value={quantity}
        className="w-10 text-center bg-transparent"
        min={1}
        type="number"
      />
      <button onClick={() => setQuantity(quantity + 1)}>
        <PlusIcon />
      </button>
    </div>
  );
}
