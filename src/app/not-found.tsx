import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { HomeIcon } from "@/assets/side-menu/home-icon";

export default function NotFound() {
  return (
    <main className="w-screen min-h-screen flex justify-center bg-[#f5f5f5]">
      <div className="max-w-6xl w-full flex gap-0 items-start overflow-hidden shadow-custom">
        <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-gray-bg-screen">
          <Image src={logo} alt="Logo TheLibrary" />
          <div className="w-[500px] h-[500px] flex flex-col items-center justify-center gap-8 p-12 rounded-full bg-green-main">
            <div className="flex flex-col gap-1">
              <h1 className="text-6xl font-bold text-yellow-main text-center">
                404
              </h1>
              <h3 className="text-xl font-bold text-white text-center">
                Ops... a página não foi encontrada.{" "}
              </h3>
              <p className="text-white text-center">
                Parece que a solicitação que você está procurando não existe ou
                foi removida.
              </p>
            </div>

            <Link href="/inicio">
              <div className="flex flex-col items-center text-white font-bold">
                <p>Clique aqui para voltar à</p>
                <p className="underline">página inicial</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
