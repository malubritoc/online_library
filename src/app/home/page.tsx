"use client";

import { Header } from "@/components/header/header";
import { SideMenu } from "@/components/menu/menu";

export default function HomePage() {
  return (
    <main className="w-screen flex justify-center">
      <div className="max-w-6xl w-full flex justify-center items-center">
        <SideMenu />
        <div className="w-full h-full px-8 bg-gray-bg-screen">
          <Header />
          content
        </div>
      </div>
    </main>
  );
}
