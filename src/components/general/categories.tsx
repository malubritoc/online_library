import clsx from "clsx";
import { useState } from "react";

export function CategoriesFilter({
  starterCategory,
}: {
  starterCategory?: string;
}) {
  const categories = [
    { name: "Todos" },
    { name: "Bíblias" },
    { name: "Teologia" },
    { name: "Filosofia" },
    { name: "Ciência" },
    { name: "Outras..." },
  ];

  function getInitialIdx() {
    if (starterCategory) {
      switch (starterCategory.toLowerCase()) {
        case "biblias":
          return 1;
        case "teologia":
          return 2;
        case "filosofia":
          return 3;
        case "ciencia":
          return 4;
        case "outros":
          return 5;
      }
    }
    return 0;
  }

  const [activeCategory, setActiveCategory] = useState(getInitialIdx());

  console.log;

  return (
    <div className="w-full flex justify-center items-center gap-[10px] ">
      {categories.map((category, idx) => {
        return (
          <div
            onClick={() => setActiveCategory(idx)}
            data-active={activeCategory == idx}
            className={clsx(
              "px-3 py-1 rounded-full",
              "bg-gray-bg-button data-[active=true]:bg-yellow-main cursor-pointer",
              "font-medium text-gray-text-button data-[active=true]:text-white"
            )}
          >
            {category.name}
          </div>
        );
      })}
    </div>
  );
}
