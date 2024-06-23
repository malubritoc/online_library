import clsx from "clsx";
import { ProductCard } from "../general/product";
import { ArrowIcon } from "@/assets/general-svg/arrow";

interface ProductSectionProps {
  title: string;
  products: number[];
  seeMore: boolean;
}

export function ProductSection({
  title,
  products,
  seeMore,
}: ProductSectionProps) {
  return (
    <div className="flex flex-col gap-4 px-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{title}</h3>
        {seeMore && (
          <button
            className={clsx(
              "flex items-center gap-3",
              "px-2 py-1 border border-[#11131A] rounded-full",
              "text-xs"
            )}
          >
            <p>Ver mais</p>
            <ArrowIcon />
          </button>
        )}
      </div>
      <div className="flex gap-4 justify-between">
        {products.map((product, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
}
