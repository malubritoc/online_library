"use client";

import { SideMenu } from "@/components/menu/menu";

export default function HomePage() {
  return (
    <main className="w-screen flex justify-center">
      <div className="max-w-6xl w-full flex justify-center items-center">
        <SideMenu />
        <div className="w-full px-8 bg-gray-bg-screen">content</div>
      </div>
    </main>
  );
}
