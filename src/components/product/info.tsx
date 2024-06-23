import clsx from "clsx";
import { useState } from "react";

export function ProductInfo() {
  const product = {
    title: "Livro 1",
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-[38px] font-bold">{product.title}</h1>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl text-green-main font-bold">
          R$ {product.price}
        </h3>
        <p className="text-[#45474F] font-semibold">
          ou em 2 x {product.price / 2} sem juros
        </p>
      </div>
      <div
        data-open={isDescriptionOpen}
        className="relative h-[120px] overflow-hidden data-[open=true]:h-auto"
      >
        <p>{product.description}</p>
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
