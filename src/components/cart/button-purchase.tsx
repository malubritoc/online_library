import { useAtom } from "jotai";
import { sessionAtom } from "@/atoms/sessionAtom";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export function PurchaseButton() {
  const [values, setValues] = useAtom(sessionAtom);
  const session = values.active;
  const router = useRouter();

  return (
    <div className="w-fit flex flex-col">
      <button
        disabled={!session}
        className={clsx(
          "w-full self-center",
          "rounded-[8px] px-6 py-2",
          "bg-green-main hover:bg-[#033e3d] text-white",
          "disabled:bg-gray-300 disabled:text-gray-500"
        )}
      >
        Finalizar Compra
      </button>
      {!session && (
        <p
          onClick={() => router.push("/signin")}
          className="text-gray-500 text-xs text-center underline p-2 cursor-pointer"
        >
          Faça login para finalizar a compra
        </p>
      )}
    </div>
  );
}
