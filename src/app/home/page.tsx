"use client";

import { ProductCard } from "@/components/general/product";
import { SearchBar } from "@/components/general/search-bar";
import { Header } from "@/components/header/header";
import { HomeBannersSlider } from "@/components/home/primary-banners";
import { HomeCategoriesFilter } from "@/components/home/categories";
import { ProductSection } from "@/components/home/product-section";
import { SideMenu } from "@/components/menu/menu";

export default function HomePage() {
  const products = [1, 2, 3, 4];

  return (
    <main className="w-screen flex justify-center">
      <div className="max-w-6xl w-full flex justify-center items-center">
        <SideMenu />
        <div className="w-full h-full flex flex-col gap-4 px-8 bg-gray-bg-screen">
          <Header />
          <SearchBar />
          <HomeBannersSlider />
          <HomeCategoriesFilter />
          <ProductSection
            title="Mais vendidos"
            products={products}
            seeMore={true}
          />
        </div>
      </div>
    </main>
  );
}
