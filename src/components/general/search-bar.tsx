import { SearchIcon } from "@/assets/general-svg/search";
import { SearchForm } from "../forms/search";

export function SearchBar() {
  return (
    <div className="w-[429px] px-4 py-2 border border-[#112E38] rounded-[26px] bg-white">
      <SearchForm />
    </div>
  );
}
