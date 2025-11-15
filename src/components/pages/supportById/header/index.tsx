import { BackLink } from "@/components/common/back-link";
import type { Support } from "@/data/support";
import { cn } from "@/lib/utils";

export const SupportByIdHeader = ({ support }: { support: Support }) => {
  return (
    <header className="bg-white flex justify-between p-5 text-neutral-900">
      <button
        className="py-2 px-5 rounded-[18px] border border-gray-300 disabled:text-gray-300"
        disabled={support.status == "cancelled"}
      >
        بستن تیکت
      </button>
      <div className="flex gap-3">
        <div className="flex flex-col text-right gap-1">
          <h1 className="text-lg">{support.title}</h1>
          <p
            className={cn(
              "text-xs font-medium",
              support.status === "reserved" && "text-blue-600",
              support.status === "available" && "text-green-600",
              support.status === "cancelled" && "text-red-600"
            )}
          >
            {" "}
            {support.status === "reserved"
              ? "پاسخ داده شده"
              : support.status === "available"
              ? "در انتظار پاسخ"
              : "بسته شده"}
          </p>
        </div>
        <BackLink to={"/supports"} />
      </div>
    </header>
  );
};
