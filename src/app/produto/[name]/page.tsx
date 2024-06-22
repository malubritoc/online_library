"use client";

import { Header } from "@/components/header/header";
import { SideMenu } from "@/components/menu/menu";
import { ProductBreadcrumbs } from "@/components/product/breadcrumbs";

interface ProductPageProps {
  params: {
    name: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main className="w-screen min-h-screen flex justify-center bg-[#f5f5f5]">
      <div className="max-w-6xl w-full flex gap-0 items-start overflow-hidden shadow-custom">
        <div className="">
          <SideMenu />
        </div>
        <div className="w-full h-full flex flex-col gap-12 px-8 pb-8 bg-gray-bg-screen">
          <Header />
          <ProductBreadcrumbs />
          <div className="flex"></div>
        </div>
      </div>
    </main>
  );
}
