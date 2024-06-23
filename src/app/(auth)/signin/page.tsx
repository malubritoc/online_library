"use client";

import { SignInComponent } from "@/components/sign-in/signin";
import Image from "next/image";
import imgSignin from "@/assets/sign-in-page/img-sign-in.png";

export default function SignInPage() {
  return (
    <main className="w-screen flex justify-center my-6">
      <div className="max-w-6xl w-full flex justify-center gap-[129px] items-center">
        <SignInComponent />
        <div className="relative">
          <div className="max-w-[447px] flex flex-col gap-2 absolute top-[105px] left-[41px]">
            <h1 className="text-white text-4xl font-bold">
              Bem-vindo(a) de volta ao the Library!
            </h1>
            <h3 className="text-white">
              Entre com sua conta para utilizar a plataforma
            </h3>
          </div>
          <Image src={imgSignin} alt="Imagem de bem-vindo" objectFit="cover" />
        </div>
      </div>
    </main>
  );
}
