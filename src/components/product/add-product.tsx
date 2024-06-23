import { BagIcon } from "@/assets/general-svg/bag";

export function AddProductButton() {
  return (
    <button className="flex p-2 justify-center gap-2 bg-black hover:bg-opacity-80 rounded-[8px]">
      <BagIcon />
      <p className="text-white font-bold">Adicionar à sacola</p>
    </button>
  );
}
