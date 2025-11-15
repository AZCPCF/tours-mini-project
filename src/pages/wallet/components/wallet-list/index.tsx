import { DecreaseIcon, IncreaseIcon } from "@/assets/icons";
import { Price } from "@/components/price";
import { SearchInput } from "@/components/search-input";
import { walletActivities } from "@/data/wallet";
import { useWalletFilter } from "@/hooks/use-wallet-filter";
import { useState } from "react";
import { FilterButtons } from "../filters-button";

export function WalletList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "increment" | "decrement">(
    "all"
  );

  const filteredActivities = useWalletFilter(walletActivities, search, filter);

  return (
    <div className="mx-4 space-y-4">
      <SearchInput
        clear={() => setSearch("")}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <FilterButtons value={filter} onChange={setFilter} />
      <div className="flex flex-wrap gap-3 direction-rtl">
        {filteredActivities.map((activity, index) => (
          <div
            className="bg-white text-neutral-900 w-full rounded-[18px] p-5 flex justify-between items-center"
            key={"activity-card-" + index}
          >
            <div className="flex gap-2">
              {activity.type == "increment" ? (
                <IncreaseIcon />
              ) : (
                <DecreaseIcon />
              )}
              <p className="truncate">{activity.title}</p>
            </div>
            <div>
              <p className="flex gap-1 w-full">
                <Price number={activity.price} />
                {activity.type == "decrement" ? "-" : ""}
                <span>تومان</span>
              </p>
              <p className="text-xs text-gray-400">
                <span>{activity.datetime.date}</span>-
                <span>{activity.datetime.time}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
