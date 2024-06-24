import { MinusIcon } from "@/assets/product/minus";
import { PlusIcon } from "@/assets/product/plus";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { formFieldsProductCartItem } from "@/atoms/cartAtom";

export function Counter({ initialQuantity }: { initialQuantity: number }) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [values, setValues] = useAtom(formFieldsProductCartItem);

  useEffect(() => {
    setValues({ product_quantity: quantity });
  }, [quantity]);

  return (
    <div
      className={clsx(
        "w-fit flex items-center justify-between gap-3 h-fit px-3 py-1 ",
        "border border-[#45474F] rounded-[6px] text-gray-900"
      )}
    >
      <button
        onClick={() =>
          setQuantity(
            quantity > initialQuantity ? quantity - 1 : initialQuantity
          )
        }
      >
        <MinusIcon />
      </button>
      <input
        value={quantity}
        className="w-10 text-center bg-transparent"
        type="number"
        onChange={(e) => {
          setQuantity(parseInt(e.target.value));
        }}
      />
      <button onClick={() => setQuantity(quantity + 1)}>
        <PlusIcon />
      </button>
    </div>
  );
}
