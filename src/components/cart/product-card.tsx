import Image from "next/image";
import img_teste from "@/assets/sign-in-page/img-sign-in.png";
import { Counter } from "../product/counter";
import { OrderProductType } from "@/atoms/cartAtom";
import { Parser } from "@/services/parser";

export function CartProduct({ product }: { product: OrderProductType }) {
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
        <Counter initialQuantity={product.product_quantity} />
      </div>
    </div>
  );
}
