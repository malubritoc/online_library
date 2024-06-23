"use client";

import { SearchBar } from "@/components/general/search-bar";
import { Header } from "@/components/header/header";
import { HomeBannersSlider } from "@/components/home/primary-banners";
import { CategoriesFilter } from "@/components/general/categories";
import { ProductSection } from "@/components/home/product-section";
import { SideMenu } from "@/components/menu/menu";
import { SecondaryBanner } from "@/components/home/secondary-banner";
import { SortButton } from "@/components/general/button-sort";
import { useEffect, useState } from "react";

export default function HomePage() {
  const products = [1, 2, 3, 4];

  return (
    <main className="w-screen min-h-screen flex justify-center bg-[#f5f5f5]">
      <div className="max-w-6xl w-full flex gap-0 items-start overflow-hidden shadow-custom">
        <div className="">
          <SideMenu />
        </div>
        <div className="w-full h-full flex flex-col gap-12 px-8 pb-8 bg-gray-bg-screen">
          <Header />
          <div className="flex justify-between">
            <SearchBar />
            <SortButton />
          </div>
          <div className="max-w-[847px]">
            <HomeBannersSlider />
          </div>
          <CategoriesFilter />
          <ProductSection
            title="Novidades"
            products={products}
            seeMore={false}
          />
          <SecondaryBanner />
          <ProductSection
            title="Promoções"
            products={products}
            seeMore={true}
          />
          <ProductSection title="Canecas" products={products} seeMore={true} />
        </div>
      </div>
    </main>
  );
}
