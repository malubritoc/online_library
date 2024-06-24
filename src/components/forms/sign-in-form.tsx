"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { formFieldsSession } from "@/atoms/sessionAtom";
import { validateUser } from "@/services/getsData";
import { useRouter } from "next/navigation";

const signInFormSchema = z.object({
  email: z.string().email("E-mail inválido."),
  password: z.string().min(4, "Senha inválida."),
});

type SignInFormInputs = z.infer<typeof signInFormSchema>;

export function SignInForm() {
  const [values, setValues] = useAtom(formFieldsSession);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(signInFormSchema),
  });

  async function validateLogin(data: SignInFormInputs) {
    if (data.email === "" || data.password === "") {
      return false;
    } else {
      const user = await validateUser(data.email, data.password);
      if (user) {
        router.push("/inicio");
        return true;
      } else {
        console.log("entrouuu");
        setError("password", {
          message: "Usuário não encontrado. Verifique seus dados.",
        });
        return false;
      }
    }
  }

  async function handleSignIn(data: SignInFormInputs) {
    const user = await validateLogin(data);
    if (user) {
      console.log("Login efetuado com sucesso");
      setValues({
        email: data.email,
        password: data.password,
        active: true,
      });
      router.push("/inicio");
      return;
    }
    setValues({
      email: "",
      password: "",
      active: false,
    });
  }

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      className="w-full flex flex-col gap-[19px]"
    >
      <div className="flex flex-col">
        <label>E-mail</label>
        <input
          type="text"
          className="border border-gray-[#AEB0B3] rounded-[8px] p-2 w-full"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label>Senha</label>
        <input
          type="password"
          className="border border-gray-[#AEB0B3] rounded-[8px] p-2 w-full"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-xs text-red-500">
            {errors.password.message}
          </span>
        )}
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
