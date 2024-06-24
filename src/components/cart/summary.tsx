import { useAtom } from "jotai";
import { OrderProductType, cartAtom } from "@/atoms/cartAtom";
import { Parser } from "@/services/parser";
import { use, useEffect, useState } from "react";

export function CartSummary() {
  const [values, setValues] = useAtom(cartAtom);
  const [subtotal, setSubtotal] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  function getSubtotal(products: OrderProductType[]) {
    return values.products.reduce((acc, product) => {
      return acc + product.product_price * product.product_quantity;
    }, 0);
  }

  function getTotalQty(products: OrderProductType[]) {
    return products.reduce((acc, product) => {
      return acc + product.product_quantity;
    }, 0);
  }

  useEffect(() => {
    setValues({
      ...values,
      total_price: getSubtotal(values.products) + values.delivery_price,
    });
  }, []);

  useEffect(() => {
    setSubtotal(getSubtotal(values.products));
    setTotalQty(getTotalQty(values.products));
  }, [values]);

  const info = [
    {
      title: `Subtotal (${getTotalQty(values.products)} produtos)`,
      value: Parser.currency(getSubtotal(values.products)),
    },
    { title: "Frete", value: Parser.currency(values.delivery_price) },
    { title: "Total", value: Parser.currency(values.total_price) },
  ];

  return (
    <div className="w-full flex flex-col gap-2 p-4 border border-[#E1E6EE] rounded-[10px]">
      {info.map((item, idx) => {
        return (
          <div key={idx} className="flex justify-between items-center">
            <p className="text-xs">{item.title}</p>
            <p
              data-total={item.title == "Total"}
              className="text-xs font-bold data-[total=true]:text-green-main"
            >
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
