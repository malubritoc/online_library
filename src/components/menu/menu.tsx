import Image from "next/image";
import logo from "@/assets/logo.png";
import { HomeIcon } from "@/assets/side-menu/home-icon";
import { NotificationIcon } from "@/assets/side-menu/notification-icon";
import { BooksIcon } from "@/assets/side-menu/books-icon";
import { SettingsIcon } from "@/assets/side-menu/settings-icon";
import { ArrowIcon } from "@/assets/general-svg/arrow";
import { useState } from "react";
import Link from "next/link";
import { ArrowsProfile } from "@/assets/side-menu/arrows-profile";
import clsx from "clsx";

export function SideMenu() {
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

  return (
    <div className="min-w-[241px] pb-4">
      <div className="fixed min-w-[241px] h-screen flex flex-col gap-6 bg-white">
        <Link href="/inicio">
          <div className="p-4 border-b-[1px] border-b-[#E1E6EE] cursor-pointer">
            <Image src={logo} alt="Logo TheLibrary" objectFit="cover" />
          </div>
        </Link>
        <div className="flex flex-col gap-1 pr-4">
          <Link href={"/inicio"}>
            <div
              className={clsx(
                "flex gap-[6px] items-center",
                "px-4 py-2 rounded-[8px]",
                "hover:bg-gray-hover hover:text-yellow-main",
                "cursor-pointer"
              )}
            >
              <HomeIcon />
              <h3 className="text-sm font-bold">Início</h3>
            </div>
          </Link>
          <Link href={"/em-breve"}>
            <div
              className={clsx(
                "flex gap-[6px] items-center",
                "px-4 py-2 rounded-[8px]",
                "hover:bg-gray-hover hover:text-yellow-main",
                "cursor-pointer"
              )}
            >
              <NotificationIcon />
              <h3 className="text-sm font-bold">Notificações</h3>
            </div>
          </Link>
          <div
            data-open={allBooksIsOpen}
            className={clsx(
              "h-[36px] data-[open=true]:h-[172px]",
              "flex flex-col gap-2",
              "overflow-hidden cursor-pointer",
              "[&>svg]:data-[open=true]:rotate-180 transition-all"
            )}
          >
            <div
              onClick={() => setAllBooksIsOpen(!allBooksIsOpen)}
              className={clsx(
                "w-full flex items-center justify-between",
                "pl-4 pr-2 py-2 rounded-[8px]",
                "hover:bg-gray-hover hover:text-yellow-main"
              )}
            >
              <div className="flex gap-[6px] items-center">
                <BooksIcon />
                <h3
                  data-open={allBooksIsOpen}
                  className="text-sm font-bold data-[open=true]:text-yellow-main"
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
              {sub_categories.map((category, idx) => {
                return (
                  <Link key={idx} href={category.url}>
                    <p
                      className={clsx(
                        "py-1 pl-5 rounded-[8px]",
                        "hover:bg-gray-hover hover:text-yellow-main text-sm"
                      )}
                    >
                      {category.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
          <Link href={"/em-breve"}>
            <div
              className={clsx(
                "flex gap-[6px] items-center",
                "px-4 py-2 rounded-[8px]",
                "hover:bg-gray-hover hover:text-yellow-main",
                "cursor-pointer"
              )}
            >
              <SettingsIcon />
              <h3 className="text-sm font-bold">Configurações</h3>
            </div>
          </Link>
        </div>
        <Link href="/em-breve">
          <div
            className={clsx(
              "w-full absolute bottom-0 flex justify-between items-center",
              "px-4 py-4 border-t-[1px] border-t-[#E1E6EE]"
            )}
          >
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
        </Link>
      </div>
    </div>
  );
}
