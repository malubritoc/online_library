import { XIcon } from "@/assets/general-svg/x";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { CartHeader } from "../cart/header-cart";
import { CartSummary } from "../cart/summary";
import { PurchaseButton } from "../cart/button-purchase";
import { ProductsListCart } from "../cart/list-products";
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cartAtom";
import { useRouter } from "next/navigation";

export function CartDialog() {
  const [values, setValues] = useAtom(cartAtom);
  const router = useRouter();

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
            <div
              data-content={values.products.length > 0}
              className="data-[content=false]:hidden flex flex-col items-center gap-12 px-4 py-8"
            >
              <ProductsListCart />
              <CartSummary />
              <PurchaseButton />
            </div>
            <div
              data-content={values.products.length > 0}
              className="hidden data-[content=false]:flex flex-col gap-8 items-center justify-center py-8"
            >
              <p>Seu carrinho ainda está vazio.</p>
              <Dialog.Close>
                <button
                  onClick={() => router.push("/categoria/todos")}
                  className="px-4 py-2 text-white bg-green-main hover:bg-[#033e3d] rounded-md"
                >
                  Conheça nossos produtos!
                </button>
              </Dialog.Close>
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
