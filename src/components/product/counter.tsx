import { MinusIcon } from "@/assets/product/minus";
import { PlusIcon } from "@/assets/product/plus";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { formFieldsProductCartItem } from "@/atoms/cartAtom";

export function Counter({ initialQuantity }: { initialQuantity: number }) {
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [values, setValues] = useAtom(formFieldsProductCartItem);

  useEffect(() => {
    setValues({ product_quantity: quantity });
  }, [quantity, setValues]);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  function updateQuantity(value: number) {
    if (value < initialQuantity) {
      setQuantity(initialQuantity);
    } else {
      setQuantity(value);
    }
  }

  return (
    <div
      className={clsx(
        "w-fit flex items-center justify-between gap-3 h-fit px-3 py-1 ",
        "border border-[#45474F] rounded-[6px] text-gray-900"
      )}
    >
      <button
        data-available={quantity > initialQuantity}
        className="[&>svg>path]:data-[available=false]:hidden"
        onClick={() => updateQuantity(quantity - 1)}
      >
        <MinusIcon />
      </button>
      <input
        value={quantity}
        className="w-10 text-center bg-transparent"
        type="number"
        onChange={(e) => {
          const newValue = parseInt(e.target.value, 10);
          if (!isNaN(newValue)) {
            updateQuantity(newValue);
          }
        }}
        onBlur={(e) => {
          const newValue = parseInt(e.target.value, 10);
          if (!isNaN(newValue) && newValue < initialQuantity) {
            updateQuantity(initialQuantity);
          }
        }}
      />
      <button onClick={() => updateQuantity(quantity + 1)}>
        <PlusIcon />
      </button>
    </div>
  );
}
