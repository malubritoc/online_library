import Image from "next/image";
import logo from "@/assets/logo.png";
import { HomeIcon } from "@/assets/side-menu/home-icon";
import { NotificationIcon } from "@/assets/side-menu/notification-icon";
import { BooksIcon } from "@/assets/side-menu/books-icon";
import { SettingsIcon } from "@/assets/side-menu/settings-icon";
import { ArrowIcon } from "@/assets/general-svg/arrow";
import { useState } from "react";

export function SideMenu() {
  const [allBooksIsOpen, setAllBooksIsOpen] = useState(false);
  const sub_categories = [
    {
      name: "Livros",
      url: "/books",
    },
    {
      name: "Promoções",
      url: "/sales",
    },
    {
      name: "Acessórios",
      url: "/accessories",
    },
    {
      name: "Canecas",
      url: "/mugs",
    },
  ];

  console.log(allBooksIsOpen);

  return (
    <div className="min-w-[241px] flex flex-col gap-6 px-6">
      <div className="p-4 border-b-[1px] border-b-[#E1E6EE]">
        <Image src={logo} alt="Logo TheLibrary" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-[6px] items-center cursor-pointer px-4 py-2 rounded-[8px] hover:bg-gray-hover hover:text-yellow-main">
          <HomeIcon />
          <h3 className="text-sm font-bold">Início</h3>
        </div>
        <div className="flex gap-[6px] items-center cursor-pointer px-4 py-2 rounded-[8px] hover:bg-gray-hover hover:text-yellow-main">
          <NotificationIcon />
          <h3 className="text-sm font-bold">Notificações</h3>
        </div>
        <div
          onClick={() => setAllBooksIsOpen(!allBooksIsOpen)}
          data-isOpen={allBooksIsOpen}
          className={`h-[36px] data-[isOpen=true]:h-[172px] flex flex-col gap-2 overflow-hidden cursor-pointer [&>svg]:data-[isOpen=true]:rotate-180 transition-all`}
        >
          <div className="w-full flex items-center justify-between pl-4 pr-2 py-2 rounded-[8px] hover:bg-gray-hover hover:text-yellow-main">
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
                allBooksIsOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          <div className="ml-1 pl-4 flex flex-col gap-1">
            {sub_categories.map((category) => {
              return (
                <p className="py-1 pl-5 rounded-[8px] hover:bg-gray-hover hover:text-yellow-main text-sm">
                  {category.name}
                </p>
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
  );
}
