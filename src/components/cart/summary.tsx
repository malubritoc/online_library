import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cartAtom";
import { Parser } from "@/services/parser";

export function CartSummary() {
  const [values, setValues] = useAtom(cartAtom);

  const info = [
    {
      title: `Subtotal (${values.products.length} produtos)`,
      value: Parser.currency(values.total_price - values.delivery_price),
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
