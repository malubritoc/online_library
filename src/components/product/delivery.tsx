import { useState } from "react";
import { CepForm } from "../forms/cep";
import clsx from "clsx";

export function ProductDelivery() {
  const [deliverySelected, setDeliverySelected] = useState(0);
  const delivery_types = [
    { name: "PAC", price: 20, deadline: 10 },
    { name: "SEDEX", price: 30, deadline: 5 },
    { name: "Retirada na loja", price: 0, deadline: 0 },
  ];

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold">Cálculo de frete</h3>
      <CepForm />
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Tipos de entrega</h3>
        {delivery_types.map((delivery, idx) => (
          <div
            key={idx}
            data-selected={deliverySelected === idx}
            onClick={() => setDeliverySelected(idx)}
            className={clsx(
              "flex justify-between items-center",
              "px-4 py-2 border border-[#ECECEC] rounded-[8px] data-[selected=true]:border-[2px] data-[selected=true]:border-[#11131A]",
              "hover:border-[#11131A] hover:border-opacity-20",
              "cursor-pointer"
            )}
          >
            <div className="flex flex-col text-sm">
              <span className="font-bold">{delivery.name}</span>
              <span>{delivery.deadline} dias úteis</span>
            </div>
            <span>R$ {delivery.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
