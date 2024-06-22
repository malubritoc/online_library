"use client";

import { SearchBar } from "@/components/general/search-bar";
import { Header } from "@/components/header/header";
import { SortButton } from "@/components/general/button-sort";
import { SideMenu } from "@/components/menu/menu";
import { CategoryTitle } from "@/components/category/category-title";
import { CategoriesFilter } from "@/components/general/categories";
import { ProductListPages } from "@/components/general/list-products";

interface SearchResultPageProps {
  params: {
    name: string;
  };
}

export default function SearchResultPage({ params }: SearchResultPageProps) {
  const products = [
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
    { title: "Cem anos de solidão", price: 100 },
  ];

  return (
    <main className="w-screen flex justify-center">
      <div className="max-w-6xl w-full flex justify-center items-start">
        <div className="">
          <SideMenu />
        </div>
        <div className="w-full h-full flex flex-col gap-12 px-8 pb-8 bg-gray-bg-screen">
          <Header />
          <SearchBar />
          <ProductListPages products={products} />
        </div>
      </div>
    </main>
  );
}
