import { ProductType } from "@/@types/Product";

export interface ProductSectionProps {
    title: string;
    products: Array<ProductType>;
    seeMore: boolean;
  }