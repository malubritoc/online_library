import logo from "@/assets/logo.png";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="w-screen min-h-screen flex justify-center bg-[#f5f5f5]">
      <div className="max-w-6xl w-full flex gap-0 items-start overflow-hidden shadow-custom">
        <div
          className={clsx(
            "w-full h-full flex flex-col items-center justify-center gap-6",
            "bg-gray-bg-screen"
          )}
        >
          <Link href="/inicio">
            <Image src={logo} alt="Logo TheLibrary" />
          </Link>
          <div
            className={clsx(
              "w-[500px] h-[500px]",
              "flex flex-col items-center justify-center gap-8",
              "p-12 rounded-full bg-green-main"
            )}
          >
            <div className="flex flex-col gap-1">
              <h1 className="text-6xl font-bold text-yellow-main text-center m-4">
                Obrigado!{" "}
              </h1>
              <p className="text-white text-center">
                Parabéns! O seu pedido foi finalizado com sucesso!
              </p>
              <p className="text-white text-center">
                Em breve você receberá um e-mail com as instruções de pagamento.
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
