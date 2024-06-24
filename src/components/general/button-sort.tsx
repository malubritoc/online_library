import { SortIcon } from "@/assets/home/sortIcon";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SortButton() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex gap-2 items-center",
          "px-3 py-2 border border-[#E1E5EA] rounded-[26px]",
          "cursor-pointer"
        )}
      >
        <SortIcon />
        <p className="text-xs">Ordenar</p>
      </button>
      <div
        onClick={() => router.push("/em-breve")}
        data-open={isOpen}
        className={clsx(
          "w-full absolute top-[36px] hidden data-[open=true]:flex flex-col gap-2",
          "px-3 py-2 border border-[#F3E7FA]",
          "bg-gray-bg-screen shadow-custom z-20 cursor-pointer"
        )}
      >
        <p className="text-[10px] py-1">Maior preço</p>
        <div className="w-full h-0 border-b-[2px] border-b-[#F3E7FA]" />
        <p className="text-[10px] py-1">Menor preço</p>
      </div>
    </div>
  );
}
