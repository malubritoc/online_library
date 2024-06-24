"use client";

import { Header } from "@/components/header/header";
import { SideMenu } from "@/components/menu/menu";
import { ProductBreadcrumbs } from "@/components/product/breadcrumbs";
import { MediaSlider } from "@/components/product/medias-slider";
import { ProductInfo } from "@/components/product/info";
import { ProductVariations } from "@/components/product/variations";
import { ProductColors } from "@/components/product/colors";
import { ProductQuantity } from "@/components/product/quantity";
import { AddProductButton } from "@/components/product/add-product";
import { WhatsappButton } from "@/components/product/whatsapp-button";
import { ProductDelivery } from "@/components/product/delivery";
import { getProductById, getProducts } from "@/services/gets";
import { useEffect, useState } from "react";
import { ProductType } from "@/@types/Product";
import { ProductPageProps } from "./interfaces";
import { useRouter } from "next/navigation";

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState({} as ProductType);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  function getProduct() {
    getProductById(params.name).then((response) => {
      if (response) {
        setProduct(response[0]);
      } else {
        router.push("/404");
      }
    });
  }

  useEffect(() => {
    try {
      getProduct();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main className="w-screen min-h-screen flex justify-center bg-[#f5f5f5]">
      <div className="max-w-6xl w-full flex gap-0 items-start overflow-hidden shadow-custom">
        <div className="">
          <SideMenu />
        </div>
        <div className="w-full h-full flex flex-col gap-6 px-8 pb-8 bg-gray-bg-screen">
          <Header />
          <ProductBreadcrumbs name={product.name} category={product.category} />
          <div className="flex"></div>
          {product && (
            <div className="flex gap-8 w-full h-full ">
              <div className="flex w-[400px] w-full">
                <MediaSlider medias={product?.links_media} />
              </div>
              <div className="w-full flex flex-col gap-6">
                <ProductInfo
                  name={product?.name}
                  price={product?.price}
                  description={product?.description}
                  offer={product?.offer}
                />
                <ProductVariations variations={product?.available_variations} />
                <ProductColors colors={product?.available_colors} />
                <ProductQuantity minUnit={product?.min_unit} />
                <div className="flex flex-col gap-4">
                  <AddProductButton product={product} />
                  <WhatsappButton />
                </div>
                <ProductDelivery deliveryTypes={product?.delivery_options} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
