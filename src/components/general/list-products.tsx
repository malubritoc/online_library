import { ProductType } from "@/@types/Product";
import { ProductCard } from "./product";

export function ProductListPages({ products }: { products?: ProductType[] }) {
  return !products ? (
    <div className="w-full h-full flex justify-center items-start">
      Nenhum produto encontrado
    </div>
  ) : (
    <div className="w-full grid grid-cols-4 gap-y-10 justify-between">
      {products.map((product, idx) => {
        return <ProductCard product={product} key={idx} />;
      })}
    </div>
  );
}
