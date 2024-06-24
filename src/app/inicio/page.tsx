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
import { getProducts, getUsers } from "@/services/getsData";
import { ProductType } from "@/@types/Product";

export default function HomePage() {
  const [products, setProducts] = useState(Array<ProductType>);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

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
            products={products
              .filter((product) => product.tags.includes("novo"))
              .slice(0, 4)}
            seeMore={false}
          />
          <SecondaryBanner />
          <ProductSection
            title="Promoções"
            products={products
              .filter((product) => product.offer == true)
              .slice(0, 4)}
            seeMore={true}
          />
          <ProductSection
            title="Canecas"
            products={products
              .filter((product) => product.product_type === "cup")
              .slice(0, 4)}
            seeMore={true}
          />
        </div>
      </div>
    </main>
  );
}
