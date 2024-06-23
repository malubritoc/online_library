import logo from "../../assets/logo.png";
import Image from "next/image";
import { SignInForm } from "../forms/sign-in-form";
import clsx from "clsx";

export function SignInComponent() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Image src={logo} alt="Logo TheLibrary" objectFit="cover" />
      <div
        className={clsx(
          "min-w-[447px] flex flex-col items-center gap-5",
          "px-20 py-8 rounded-[24px] border-[3px] border-[#F5F7FA] shadow-custom"
        )}
      >
        <h2 className="text-2xl text-[#0C1421] font-bold">Login da marca</h2>
        <SignInForm />
        <button className="px-6 py-2 rounded-[8px] border border-[#D0D5DD] hover:border-black text-xs text-[#667085] hover:text-black">
          Esqueci minha senha
        </button>
      </div>
      <p>
        Não possui conta?{" "}
        <a className="underline text-green-main hover:text-[#033e3d] cursor-pointer">
          Clique aqui
        </a>
      </p>
    </div>
  );
}
