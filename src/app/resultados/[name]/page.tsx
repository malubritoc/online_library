"use client";

import { SearchBar } from "@/components/general/search-bar";
import { Header } from "@/components/header/header";
import { SideMenu } from "@/components/menu/menu";
import { ProductListPages } from "@/components/general/list-products";
import { SearchResultPageProps } from "./interfaces";

export default function SearchResultPage({ params }: SearchResultPageProps) {
  return (
    <main className="w-screen min-h-screen flex justify-center bg-[#f5f5f5]">
      <div className="max-w-6xl w-full flex gap-0 items-start overflow-hidden shadow-custom">
        <div className="">
          <SideMenu />
        </div>
        <div className="w-full h-full flex flex-col gap-12 px-8 pb-8 bg-gray-bg-screen">
          <Header />
          <SearchBar />
          <ProductListPages />
        </div>
      </div>
    </main>
  );
}
