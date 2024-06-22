import Link from "next/link";

export function ProductBreadcrumbs() {
  return (
    <div className="flex items-center text-sm text-gray-500">
      <Link href="/inicio" className="hover:text-yellow-main">
        Início
      </Link>
      <span className="mx-2">&gt;</span>
      <Link href="/categoria/biblias" className="hover:text-yellow-main">
        Categoria
      </Link>
      <span className="mx-2">&gt;</span>
      <span className="font-bold">Data</span>
    </div>
  );
}
