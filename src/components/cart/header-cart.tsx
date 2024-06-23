import { BagIcon } from "@/assets/general-svg/bag";

export function CartHeader() {
  return (
    <div className="flex gap-3 p-8 border-b border-b-[#F3F3F5]">
      <div className="flex items-center justify-center p-3 border border-[#F2F3F6] rounded-md">
        <BagIcon color="black" />
      </div>
      <div className="flex flex-col gap-0">
        <h1 className="text-sm font-bold">Carrinho</h1>
        <h2 className="text-xs">
          Certifique da sua escolha e finalize a compra
        </h2>
      </div>
    </div>
  );
}
