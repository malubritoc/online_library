import { ProductCard } from "./product";

export function ProductListPages({ products }: { products: any[] }) {
  return (
    <div className="w-full grid grid-cols-4 gap-y-10 justify-between">
      {products.map((product, i) => {
        return <ProductCard />;
      })}
    </div>
  );
}
