"use client";

import { SearchBar } from "@/components/general/search-bar";
import { Header } from "@/components/header/header";
import { SortButton } from "@/components/general/button-sort";
import { SideMenu } from "@/components/menu/menu";
import { CategoryTitle } from "@/components/category/category-title";
import { CategoriesFilter } from "@/components/general/categories";
import { ProductListPages } from "@/components/general/list-products";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/gets";
import { ProductType } from "@/@types/Product";
import { CategoryPageProps } from "./interfaces";
import { useRouter } from "next/navigation";

export default function CategoryPage({ params }: CategoryPageProps) {
  const [products, setProducts] = useState(Array<ProductType>);
  const router = useRouter();

  useEffect(() => {
    getProducts().then((data: any) => {
      const filteredProducts =
        params.name === "todos"
          ? data
          : data.filter(
              (product: ProductType) =>
                product.category.toLowerCase() === params.name.toLowerCase()
            );

      if (filteredProducts.length === 0) {
        router.push("/nao-encontrado");
      } else {
        setProducts(filteredProducts);
      }
    });
  }, [params.name, router]);

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
          <CategoryTitle title={params.name} />
          <CategoriesFilter starterCategory={params.name} />
          <ProductListPages products={products} />
        </div>
      </div>
    </main>
  );
}
