import { XIcon } from "@/assets/general-svg/x";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { CartHeader } from "../cart/header-cart";
import { CartSummary } from "../cart/summary";
import { PurchaseButton } from "../cart/button-purchase";
import { ProductsListCart } from "../cart/list-products";

export function CartDialog() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-20 grid place-items-center bg-gray-900/30">
        <Dialog.Content
          className={clsx(
            "relative max-w-[485px] max-h-[90%] w-full  overflow-hidden",
            "border-[3px] border-[#F3E7FA] rounded-[23px]",
            "shadow-low bg-white animate-fade-in-scale"
          )}
        >
          <Dialog.Title className="hidden" />
          <div className="flex flex-col">
            <CartHeader />
            <div className="flex flex-col items-center gap-12 px-4 py-8">
              <ProductsListCart />
              <CartSummary />
              <PurchaseButton />
            </div>
          </div>
          <Dialog.Close className="absolute top-6 right-6">
            <XIcon />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
