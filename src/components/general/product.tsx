import Image from "next/image";
import img_teste from "@/assets/sign-in-page/img-sign-in.png";
import Link from "next/link";
import clsx from "clsx";
import { ProductType } from "@/@types/Product";
import { Parser } from "@/services/parser";

export function ProductCard({ product }: { product: ProductType }) {
  function getTagText(tag: string) {
    switch (tag) {
      case "novo":
        return "novidade";
      case "promocao":
        return "promoção";
      case "esgotado":
        return "esgotado";
      default:
        return "";
    }
  }

  return (
    <Link href={`/produto/${product.id}`}>
      <div className="w-[180px] flex flex-col gap-4">
        <div
          className={clsx(
            "h-[265px] relative flex justify-center rounded-lg overflow-hidden",
            "transform transition duration-500 hover:scale-[1.02]"
          )}
        >
          <img
            src={product.links_media[0]}
            alt="Livro"
            className="object-cover w-full"
          />
          {product.tags.length > 0 && (
            <div
              data-soldout={product.tags[0] == "esgotado"}
              className="absolute top-2 left-2 rounded rounded-tl-lg bg-green-main data-[soldout=true]:bg-[#959CB6] px-2 py-1"
            >
              <p className="text-white text-xs font-bold">
                {getTagText(product.tags[0])}
              </p>
            </div>
          )}
        </div>
        <div className="min-h-[50px] flex flex-col justify-between">
          <div>
            <p className="text-xs">{product.name}</p>
          </div>
          <div>
            {product.offer ? (
              <div className="flex gap-2 items-center">
                <p className="text-xs text-[#EC412A] font-bold">
                  {Parser.currency(product.price * 0.8)}
                </p>
                <p className="text-xs text-[#45474F] line-through">
                  {Parser.currency(product.price)}
                </p>
                <div className="border border-[#EC412A] px-1 text-xs text-[#EC412A] rounded-sm">
                  -20%
                </div>
              </div>
            ) : (
              <p className="text-xs font-bold">R$ {product.price}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
