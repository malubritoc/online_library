import Image from "next/image";
import logo from "@/assets/logo.png";
import { HomeIcon } from "@/assets/side-menu/home-icon";
import { NotificationIcon } from "@/assets/side-menu/notification-icon";
import { BooksIcon } from "@/assets/side-menu/books-icon";
import { SettingsIcon } from "@/assets/side-menu/settings-icon";
import { ArrowIcon } from "@/assets/general-svg/arrow";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowsProfile } from "@/assets/side-menu/arrows-profile";

export function SideMenu() {
  const router = useRouter();
  const [allBooksIsOpen, setAllBooksIsOpen] = useState(false);
  const sub_categories = [
    {
      name: "Livros",
      url: "/categoria/todos",
    },
    {
      name: "Promoções",
      url: "/resultados/promocoes",
    },
    {
      name: "Acessórios",
      url: "/resultados/acessorios",
    },
    {
      name: "Canecas",
      url: "/resultados/canecas",
    },
  ];

  console.log(allBooksIsOpen);

  return (
    <div className="min-w-[241px] pb-4">
      <div className="fixed min-w-[241px] h-screen flex flex-col gap-6 bg-white">
        <Link href="/inicio">
          <div className="p-4 border-b-[1px] border-b-[#E1E6EE] cursor-pointer">
            <Image src={logo} alt="Logo TheLibrary" />
          </div>
        </Link>
        <div className="w-full absolute bottom-0 flex justify-between items-center px-4 py-4 border-t-[1px] border-t-[#E1E6EE]">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Imagem de perfil"
              width={27}
              height={27}
              objectFit="cover"
              className="rounded-full"
            />
            <p className="text-sm font-bold">Menino Feliz</p>
          </div>
          <ArrowsProfile />
        </div>
        <div className="flex flex-col gap-1 pr-4">
          <Link href={"/inicio"}>
            <div className="flex gap-[6px] items-center cursor-pointer px-4 py-2 rounded-[8px] hover:bg-gray-hover hover:text-yellow-main">
              <HomeIcon />
              <h3 className="text-sm font-bold">Início</h3>
            </div>
          </Link>
          <div className="flex gap-[6px] items-center cursor-pointer px-4 py-2 rounded-[8px] hover:bg-gray-hover hover:text-yellow-main">
            <NotificationIcon />
            <h3 className="text-sm font-bold">Notificações</h3>
          </div>
          <div
            data-isOpen={allBooksIsOpen}
            className={`h-[36px] data-[isOpen=true]:h-[172px] flex flex-col gap-2 overflow-hidden cursor-pointer [&>svg]:data-[isOpen=true]:rotate-180 transition-all`}
          >
            <div
              onClick={() => setAllBooksIsOpen(!allBooksIsOpen)}
              className="w-full flex items-center justify-between pl-4 pr-2 py-2 rounded-[8px] hover:bg-gray-hover hover:text-yellow-main"
            >
              <div className="flex gap-[6px] items-center">
                <BooksIcon />
                <h3
                  data-isOpen={allBooksIsOpen}
                  className="text-sm font-bold data-[isOpen=true]:text-yellow-main"
                >
                  Todos Livros
                </h3>
              </div>
              <ArrowIcon
                className={`transition-transform duration-300 ${
                  allBooksIsOpen ? "rotate-90" : ""
                }`}
              />
            </div>
            <div className="ml-1 pl-4 flex flex-col gap-1">
              {sub_categories.map((category) => {
                return (
                  <Link href={category.url} key={category.name}>
                    <p className="py-1 pl-5 rounded-[8px] hover:bg-gray-hover hover:text-yellow-main text-sm">
                      {category.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex gap-[6px] items-center cursor-pointer px-4 py-2 rounded-[8px] hover:bg-gray-hover hover:text-yellow-main">
            <SettingsIcon />
            <h3 className="text-sm font-bold">Configurações</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
