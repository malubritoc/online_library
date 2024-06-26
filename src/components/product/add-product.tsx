import { ProductType } from "@/@types/Product";
import { BagIcon } from "@/assets/general-svg/bag";
import {
  formFieldsCartItem,
  formFieldsProductCartItem,
} from "@/atoms/cartAtom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Toast } from "../toasts/toast";

interface AddProductButtonProps {
  product: ProductType;
}

export function AddProductButton({ product }: AddProductButtonProps) {
  const [values, setValues] = useAtom(formFieldsCartItem);
  const [productCart, setProductCart] = useAtom(formFieldsProductCartItem);
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    setValues({
      products: [
        ...values.products,
        {
          product_id: product.id,
          product_name: product.name,
          product_price: product.offer ? product.price * 0.8 : product.price,
          product_quantity: productCart.product_quantity,
          product_link_media: product.links_media[0],
          product_additional_info: [],
        },
      ],
      quantity: values.quantity + productCart.product_quantity,
      delivery_price: values.delivery_price,
      total_price: values.total_price + product.price,
    });
    setAdded(true);
  }

  return (
    <>
      <div
        onClick={handleAddToCart}
        className="flex p-2 justify-center gap-2 bg-black hover:bg-opacity-80 rounded-[8px] cursor-pointer"
      >
        <BagIcon />
        <p className="text-white font-bold">Adicionar à sacola</p>
        <div className="w-0">
          {added && (
            <Toast
              open={added}
              setOpen={setAdded}
              title="Produto adicionado ao carrinho"
              description="O produto foi adicionado ao carrinho com sucesso!"
            />
          )}
        </div>
      </div>
    </>
  );
}
