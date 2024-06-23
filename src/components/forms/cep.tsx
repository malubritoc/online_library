"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowIcon } from "@/assets/product/arrow";
import clsx from "clsx";

const cepFormSchema = z.object({
  cep: z
    .string()
    .length(8, "O CEP deve ter exatamente 8 dígitos")
    .regex(/^\d+$/, "O CEP deve conter apenas números"),
});

type CepFormInputs = z.infer<typeof cepFormSchema>;

export function CepForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CepFormInputs>({
    resolver: zodResolver(cepFormSchema),
  });

  function handleCep(data: CepFormInputs) {
    // console.log(data);
  }

  return (
    <div className="flex flex-col gap-1">
      <form
        className="flex items-center gap-2"
        onSubmit={handleSubmit(handleCep)}
      >
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Digite seu CEP para calcular"
            className="w-full bg-white px-3 py-2 border border-[#11131A] rounded-[8px]"
            {...register("cep")}
            maxLength={8}
          />
        </div>
        <button
          className={clsx(
            "px-3 py-2 border border-[#11131A] rounded-[8px]",
            "bg-[#11131A] hover:bg-opacity-80"
          )}
        >
          <ArrowIcon />
        </button>
      </form>
      {errors.cep && <span className="">CEP inválido</span>}
      <button className="text-sm underline self-start px-4">
        Não sei meu cep
      </button>
    </div>
  );
}
