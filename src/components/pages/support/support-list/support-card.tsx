import { HeadphoneSuccessIcon } from "@/assets/icons";
import type { Support } from "@/data/support";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

type SupportCardProps = {
  support: Support;
  onClick?: () => void;
  className?: string;
};

export const SupportCard = ({
  support,
  onClick,
  className,
}: SupportCardProps) => {
  return (
    <Link
      to={support.id}
      onClick={onClick}
      className={cn(
        "bg-white text-neutral-900 w-full rounded-[18px] p-5 flex justify-between items-start",
        className
      )}
    >
      <div className="flex gap-8 items-center">
        <div className="bg-emerald-100/60 w-14 h-14 rounded-full flex justify-center items-center">
          <HeadphoneSuccessIcon />
        </div>
        <div className="flex flex-col text-right gap-3">
          <p className="font-semibold truncate">{support.title}</p>
          <p className={"text-sm font-medium text-gray-400"}>
            {support.status === "reserved"
              ? "پاسخ داده شده"
              : support.status === "available"
              ? "در انتظار پاسخ"
              : "بسته شده"}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-400 mt-1">{support.date}</p>
      </div>
    </Link>
  );
};
