import clsx from "clsx";

export function PurchaseButton() {
  return (
    <button
      className={clsx(
        "w-fit self-center",
        "rounded-[8px] px-6 py-2",
        "bg-green-main hover:bg-[#033e3d] text-white"
      )}
    >
      Finalizar Compra
    </button>
  );
}
