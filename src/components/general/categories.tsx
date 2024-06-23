import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";

export function CategoriesFilter({
  starterCategory,
}: {
  starterCategory?: string;
}) {
  function getInitialIdx() {
    if (starterCategory) {
      switch (starterCategory.toLowerCase()) {
        case "teologia":
          return 1;
        case "filosofia":
          return 2;
        case "programacao":
          return 3;
        case "culinaria":
          return 4;
      }
    }
    return 0;
  }

  const [activeCategory, setActiveCategory] = useState(getInitialIdx());

  return (
    <div className="w-full flex justify-center items-center gap-[10px] ">
      {categories.map((category, idx) => {
        return (
          <Link key={idx} href={`/categoria/${category.value}`}>
            <div
              onClick={() => setActiveCategory(idx)}
              data-active={activeCategory == idx}
              className={clsx(
                "px-3 py-1 rounded-full",
                "bg-gray-bg-button data-[active=true]:bg-yellow-main cursor-pointer",
                "font-medium text-gray-text-button data-[active=true]:text-white",
                "hover:text-yellow-main"
              )}
            >
              {category.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
