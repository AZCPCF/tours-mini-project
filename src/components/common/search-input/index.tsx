import { CloseIcon, SearchIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { Input } from "../input";
import type { ChangeEvent } from "react";

type SearchInputProps = {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clear: () => void;
  className?: string;
};

export const SearchInput = ({
  placeholder = "جستجو...",
  value,
  onChange,
  clear,
  className,
}: SearchInputProps) => {
  return (
    <div className={cn("relative mt-3", className)}>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pr-9 pl-9"
      />
      <SearchIcon className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500" />
      {value && (
        <button
          type="button"
          onClick={clear}
          className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
