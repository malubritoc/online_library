import { ProductCard } from "./product";

export function ProductListPages({ products }: { products: any[] }) {
  console.log("aqui", products);
  return (
    <div className="w-full grid grid-cols-4 gap-y-10 justify-between">
      {products.map((product, idx) => {
        return <ProductCard product={product} key={idx} />;
      })}
    </div>
  );
}
