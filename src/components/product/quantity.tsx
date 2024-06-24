import { Counter } from "./counter";

export function ProductQuantity({ minUnit }: { minUnit: number }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold">Quantidade </h3>
      <p>⚠️ Para este produto quantidade mínima é:</p>
      <Counter initialQuantity={minUnit} />
    </div>
  );
}
