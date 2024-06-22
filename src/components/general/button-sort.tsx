import { SortIcon } from "@/assets/home/sortIcon";

export function SortButton() {
  return (
    <button className="flex gap-2 items-center px-3 py-2 border border-[#E1E5EA] rounded-[26px]">
      <SortIcon />
      <p className="text-xs">Ordenar</p>
    </button>
  );
}
