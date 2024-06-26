import { useEffect, useState } from "react";
import { CepForm } from "../forms/cep";
import clsx from "clsx";
import { Parser } from "@/services/parser";
import { formFieldsCartItem } from "@/atoms/cartAtom";
import { useAtom } from "jotai";
import { set } from "firebase/database";

export function ProductDelivery({
  deliveryTypes,
}: {
  deliveryTypes: {
    name: string;
    price: number;
    deadline: number;
  }[];
}) {
  const [deliverySelected, setDeliverySelected] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [values, setValues] = useAtom(formFieldsCartItem);

  useEffect(() => {
    setValues({
      products: values.products,
      quantity: values.quantity,
      delivery_price: deliveryPrice,
      total_price: values.total_price + deliveryPrice,
    });
    console.log(values);
  }, [deliverySelected]);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold">Cálculo de frete</h3>
      <CepForm />
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Tipos de entrega</h3>
        {deliveryTypes?.map((delivery, idx) => (
          <div
            key={idx}
            data-selected={deliverySelected === idx}
            onClick={() => {
              setDeliveryPrice(delivery.price);
              setDeliverySelected(idx);
            }}
            className={clsx(
              "flex justify-between items-center",
              "px-4 py-2 border border-[#ECECEC] rounded-[8px]",
              "data-[selected=true]:border-[2px] data-[selected=true]:border-[#11131A]",
              "hover:border-[#11131A] hover:border-opacity-20",
              "cursor-pointer"
            )}
          >
            <div className="flex flex-col text-sm">
              <span className="font-bold">{delivery.name}</span>
              <span>{delivery.deadline} dias úteis</span>
            </div>
            <span>{Parser.currency(delivery.price)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
