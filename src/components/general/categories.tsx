import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

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

  function getParamName(name: string) {
    switch (name) {
      case "Todos":
        return "todos";
      case "Bíblias":
        return "biblias";
      case "Teologia":
        return "teologia";
      case "Filosofia":
        return "filosofia";
      case "Ciência":
        return "ciencia";
      case "Outras...":
        return "outros";
    }
  }

  const [activeCategory, setActiveCategory] = useState(getInitialIdx());

  return (
    <div className="w-full flex justify-center items-center gap-[10px] ">
      {categories.map((category, idx) => {
        return (
          <Link key={idx} href={`/categoria/${getParamName(category.name)}`}>
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
