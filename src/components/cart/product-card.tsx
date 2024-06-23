import Image from "next/image";
import img_teste from "@/assets/sign-in-page/img-sign-in.png";
import { Counter } from "../product/counter";

export function CartProduct() {
  return (
    <div className="w-full flex gap-8">
      <Image src={img_teste} alt="Cem anos de solidão" width={100} />
      <div className="flex flex-col gap-2 py-2">
        <h3 className="font-bold">Cem anos de solidão</h3>
        <p className="text-green-main font-bold">R$100,00</p>
        <Counter />
      </div>
    </div>
  );
}
