import clsx from "clsx";
import { useState } from "react";

export function HomeCategoriesFilter() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = [
    { name: "Todos" },
    { name: "Bíblias" },
    { name: "Teologia" },
    { name: "Filosofia" },
    { name: "Ciência" },
    { name: "Outras..." },
  ];

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
