"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SearchIcon } from "@/assets/general-svg/search";
import { useRouter } from "next/navigation";

const searchFormSchema = z.object({
  param: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearch(data: SearchFormInputs) {
    router.push("/em-breve");
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleSearch)}
    >
      <button type="submit">
        <SearchIcon />
      </button>
      <input
        type="text"
        placeholder="Pesquisar e filtrar"
        className="w-full bg-transparent outline-none"
        {...register("param")}
      />
    </form>
  );
}
