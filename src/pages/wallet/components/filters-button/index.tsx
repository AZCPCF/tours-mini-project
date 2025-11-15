import { cn } from "@/lib/utils";

type FilterType = "all" | "increment" | "decrement";

type FilterButtonsProps = {
  value: FilterType;
  onChange: (val: FilterType) => void;
  className?: string;
};

const filters: { label: string; value: FilterType }[] = [
  { label: "همه", value: "all" },
  { label: "افزایش", value: "increment" },
  { label: "کاهش", value: "decrement" },
];

export function FilterButtons({
  value,
  onChange,
  className,
}: FilterButtonsProps) {
  return (
    <div
      className={cn(
        "flex gap-2 mt-3 justify-start flex-row-reverse",
        className
      )}
    >
      {filters.map((f) => (
        <button
          key={f.value}
          type="button"
          onClick={() => onChange(f.value)}
          className={cn(
            "px-4 py-2 rounded-lg text-sm bg-gray-100 text-gray-500 ",
            value === f.value && "bg-primary text-white"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
