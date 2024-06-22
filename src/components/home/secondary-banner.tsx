import Image from "next/image";
import banner from "@/assets/home/banners/secondary-banner.png";

export function SecondaryBanner() {
  return (
    <div className="w-full">
      <Image src={banner} alt="Banner" className="w-full object-cover" />
    </div>
  );
}
