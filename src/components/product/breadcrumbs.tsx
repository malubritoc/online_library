import Link from "next/link";
import { getCategoryTitle } from "@/services/getCategoryTitle";
import { ProductBreadcrumbsProps } from "./interfaces";

export function ProductBreadcrumbs({
  name,
  category,
}: ProductBreadcrumbsProps) {
  return (
    <div className="flex items-center text-sm text-gray-500">
      <Link href="/inicio" className="hover:text-yellow-main">
        Início
      </Link>
      <span className="mx-2">&gt;</span>
      <Link href={`/categoria/${category}`} className="hover:text-yellow-main">
        {getCategoryTitle(category)}
      </Link>
      <span className="mx-2">&gt;</span>
      <span className="font-bold">{name}</span>
    </div>
  );
}
