import * as Dialog from "@radix-ui/react-dialog";
import { CartDialog } from "../dialogs/cartDialog";
import { BagIcon } from "@/assets/general-svg/bag";
import clsx from "clsx";
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cartAtom";

export function Header() {
  const [values, setValues] = useAtom(cartAtom);

  return (
    <div
      className={clsx(
        "max-h-[71px] flex justify-between items-center",
        "py-4 border-b border-b-black border-opacity-10"
      )}
    >
      <h1 className="text-[28px] font-bold">Todos Livros</h1>
      <Dialog.Root>
        <Dialog.Trigger>
          <div className="relative px-4 cursor-pointer">
            <BagIcon color="black" />
            {values.quantity != 0 && (
              <div className="absolute top-[-2px] right-[10px] w-3 h-3 flex items-center justify-center bg-green-main rounded-full">
                <p className="text-[10px] text-white font-bold">
                  {values.quantity}
                </p>
              </div>
            )}
          </div>
        </Dialog.Trigger>
        <CartDialog />
      </Dialog.Root>
    </div>
  );
}
