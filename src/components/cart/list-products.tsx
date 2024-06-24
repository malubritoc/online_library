import { CartProduct } from "./product-card";
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cartAtom";

export function ProductsListCart() {
  const [values, setValues] = useAtom(cartAtom);
  const products = values.products;

  return (
    <div className="w-full max-h-[250px] flex flex-col gap-2 overflow-y-scroll px-2">
      {products.map((product, idx) => {
        return <CartProduct key={idx} product={product} />;
      })}
    </div>
  );
}
