import Image from "next/image";
import img_teste from "@/assets/sign-in-page/img-sign-in.png";
import Link from "next/link";

export function ProductCard() {
  return (
    <Link href="/produto/oi">
      <div className="max-w-[200px] flex flex-col gap-4">
        <div className="rounded-[8px] overflow-hidden  transform transition duration-500 hover:scale-[1.02]">
          <Image src={img_teste} alt="Livro" className="object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs">Livro 1</p>
          <p className="text-xs font-bold">R$ 100,00</p>
        </div>
      </div>
    </Link>
  );
}
