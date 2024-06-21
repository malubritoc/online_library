import { CartProduct } from "./product-card";

export function ProductsListCart() {
  const products = [
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
  ];

  return (
    <div className="w-full max-h-[250px] flex flex-col gap-2 overflow-y-scroll px-2">
      {products.map((product, i) => {
        return <CartProduct />;
      })}
    </div>
  );
}
