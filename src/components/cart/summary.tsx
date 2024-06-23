export function CartSummary() {
  const info = [
    { title: "Subtotal (2 produtos)", value: "R$ 100,00" },
    { title: "Frete", value: "R$ 10,00" },
    { title: "Total", value: "R$ 110,00" },
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
