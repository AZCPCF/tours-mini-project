import { cn } from "@/lib/utils";
import type { ChangeEvent } from "react";

export type InputProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};

export const Input = ({
  value,
  defaultValue,
  onChange,
  placeholder,
  className,
}: InputProps) => {
  return (
    <input
      className={cn(
        "rounded-[18px] border border-primary w-full px-2 py-4 bg-[#f3fafe] outline-primary focus:outline-2 direction-rtl pr-9 mt-1 text-black",
        className
      )}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};
