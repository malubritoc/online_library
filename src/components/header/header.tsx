import { HomeIcon } from "@/assets/side-menu/home-icon";

export function Header() {
  return (
    <div className="flex justify-between items-center py-4 border-b border-b-black border-opacity-10">
      <h1 className="text-[28px] font-bold">Todos Livros</h1>
      <div className="px-4 cursor-pointer">
        <HomeIcon />
      </div>
    </div>
  );
}
