import { Counter } from "../product/counter";
import { OrderProductType } from "@/atoms/cartAtom";
import { Parser } from "@/services/parser";
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cartAtom";
import { set } from "firebase/database";

export function CartProduct({ product }: { product: OrderProductType }) {
  const [values, setValues] = useAtom(cartAtom);

  return (
    <div className="w-full flex gap-8">
      <img
        src={product.product_link_media}
        alt="Imagem do produto"
        className="w-[100px] object-cover rounded-[8px]"
      />
      <div className="flex flex-col gap-2 py-2">
        <h3 className="font-bold">{product.product_name}</h3>
        <p className="text-green-main font-bold">
          {Parser.currency(product.product_price)}
        </p>
        <p className="text-xs text-gray-500">
          {product.product_quantity}{" "}
          {product.product_quantity == 1 ? "unidade" : "unidades"}
        </p>
        {/* <Counter initialQuantity={product.product_quantity} /> */}
      </div>
    </div>
  );
}
