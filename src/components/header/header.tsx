import { HomeIcon } from "@/assets/side-menu/home-icon";
import * as Dialog from "@radix-ui/react-dialog";
import { CartDialog } from "../dialogs/cartDialog";

export function Header() {
  return (
    <div className="flex justify-between items-center py-4 border-b border-b-black border-opacity-10">
      <h1 className="text-[28px] font-bold">Todos Livros</h1>
      <Dialog.Root>
        <Dialog.Trigger>
          <div className="px-4 cursor-pointer">
            <HomeIcon />
          </div>
        </Dialog.Trigger>
        <CartDialog />
      </Dialog.Root>
    </div>
  );
}
