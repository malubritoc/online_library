"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).+$/),
});

type SignInFormInputs = z.infer<typeof signInFormSchema>;

export function SignInForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(signInFormSchema),
  });

  return (
    <form className="w-full flex flex-col gap-[19px]">
      <div className="flex flex-col">
        <label>E-mail</label>
        <input
          type="text"
          data-invalid={errors.email ? true : undefined}
          className="border border-gray-[#AEB0B3] rounded-[8px] p-2 w-full"
          {...register("email")}
        />
        {errors.email && <span className="">Email inválido</span>}
      </div>
      <div className="flex flex-col">
        <label>Senha</label>
        <input
          type="password"
          data-invalid={errors.password ? true : undefined}
          className="border border-gray-[#AEB0B3] rounded-[8px] p-2 w-full"
          {...register("password")}
        />
        {errors.password && <span className="">Senha inválida</span>}
      </div>
      <button
        type="submit"
        className="w-full bg-green-main hover:bg-[#033e3d] rounded-[8px] p-2 text-white"
      >
        Entrar
      </button>
    </form>
  );
}
