import { WhatsappIcon } from "@/assets/product/wpp";

export function WhatsappButton() {
  return (
    <button className="flex p-2 items-center justify-center gap-2 border-[2px] border-[#34A853] rounded-[8px]">
      <WhatsappIcon />
      <p className="text-[#34A853] font-bold">Tem alguma dúvida?</p>
    </button>
  );
}
