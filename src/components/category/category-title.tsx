import { getCategoryTitle } from "@/services/getCategoryTitle";

export function CategoryTitle({ title }: { title: string }) {
  return (
    <div className="w-full p-14 rounded-[18px] bg-yellow-main text-5xl text-white font-bold">
      <h1>/{getCategoryTitle(title)}</h1>
    </div>
  );
}
