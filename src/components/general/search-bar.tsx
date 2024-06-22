import { SearchIcon } from "@/assets/general-svg/search";

export function SearchBar() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border border-[#112E38] rounded-[26px] bg-white">
      <button>
        <SearchIcon />
      </button>
      <input
        type="text"
        placeholder="Pesquisar e filtrar"
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
}
