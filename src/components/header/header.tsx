import * as Dialog from "@radix-ui/react-dialog";
import { CartDialog } from "../dialogs/cartDialog";
import { BagIcon } from "@/assets/general-svg/bag";

export function Header() {
  return (
    <div className="max-h-[71px] flex justify-between items-center py-4 border-b border-b-black border-opacity-10">
      <h1 className="text-[28px] font-bold">Todos Livros</h1>
      <Dialog.Root>
        <Dialog.Trigger>
          <div className="px-4 cursor-pointer">
            <BagIcon color="black" />
          </div>
        </Dialog.Trigger>
        <CartDialog />
      </Dialog.Root>
    </div>
  );
}
