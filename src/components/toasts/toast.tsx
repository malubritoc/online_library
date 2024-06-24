import { XIcon } from "@/assets/general-svg/x";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { clsx } from "clsx";

export function Toast(props: ToastProps) {
  return (
    <ToastPrimitive.Provider swipeDirection={"left"}>
      <ToastPrimitive.Root
        open={props.open}
        onOpenChange={props.setOpen}
        className={clsx(
          "z-50 fixed w-full max-w-[600px] md:w-full top-4 shadow-lg rounded-lg right-1/2 translate-x-1/2",
          "bg-[#a7d7a7]",
          "radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right",
          "radix-state-closed:animate-toast-hide",
          "radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x",
          "radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x",
          "radix-swipe-direction-down:radix-swipe-end:animate-toast-swipe-out-y",
          "radix-swipe-direction-down:translate-y-radix-toast-swipe-move-y",
          "radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <div className="flex">
          <div className="w-0 flex-1 flex items-center pl-6 py-4">
            <div className="w-full radix">
              <ToastPrimitive.Title className="text-base font-bold text-gray-900">
                {props.title}
              </ToastPrimitive.Title>
              <ToastPrimitive.Description className="mt-0 text-base md:text-xs text-gray-900">
                {props.description}
              </ToastPrimitive.Description>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col px-3 py-2 space-y-1">
              <div className="h-0 flex-1 flex">
                <ToastPrimitive.Close className="w-full  px-3 py-2 flex items-center justify-center focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <XIcon />
                </ToastPrimitive.Close>
              </div>
            </div>
          </div>
        </div>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}
