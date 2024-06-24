import { ProductType } from "@/@types/Product";

export interface ProductSectionProps {
    title: string;
    slug?: string;
    products: Array<ProductType>;
    seeMore: boolean;
  }