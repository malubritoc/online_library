export function CategoryTitle({ title }: { title: string }) {
  function getTitle(title: string) {
    switch (title) {
      case "todos":
        return "Todos";
      case "biblias":
        return "Bíblias";
      case "teologia":
        return "Teologia";
      case "filosofia":
        return "Filosofia";
      case "ciencia":
        return "Ciência";
      case "outros":
        return "Outras...";
    }
  }

  return (
    <div className="w-full p-14 rounded-[18px] bg-yellow-main text-5xl text-white font-bold">
      <h1>/{getTitle(title)}</h1>
    </div>
  );
}
