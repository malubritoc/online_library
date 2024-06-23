import { ProductType } from "@/@types/Product";
import { Parser } from "@/services/parser";
import clsx from "clsx";
import { useState } from "react";
import { ProductInfoProps } from "./interfaces";

export function ProductInfo({ name, price, description }: ProductInfoProps) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-[38px] font-bold">{name}</h1>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl text-green-main font-bold">
          R$ {Parser.currency(price)}
        </h3>
        <p className="text-[#45474F] font-semibold">
          ou em 2 x {Parser.currency(price / 2)} sem juros
        </p>
      </div>
      <div
        data-open={isDescriptionOpen}
        className="relative h-[120px] overflow-hidden data-[open=true]:h-auto"
      >
        <p>{description}</p>
        {!isDescriptionOpen && (
          <div
            className={clsx(
              "w-full h-[100px] absolute bottom-0",
              "bg-gradient-to-t from-gray-bg-screen to-transparent"
            )}
          />
        )}
      </div>
      <button
        className="self-start underline"
        onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
      >
        {isDescriptionOpen
          ? "Ver menos detalhes do produto"
          : "Ver mais detalhes do produto"}
      </button>
    </div>
  );
}
