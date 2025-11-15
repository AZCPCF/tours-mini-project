import { SearchInput } from "@/components/common/search-input";
import { walletActivities } from "@/data/wallet";
import { useWalletFilter } from "@/hooks/use-wallet-filter";
import { useState } from "react";
import { FilterButtons } from "../filters-button";
import { WalletCard } from "./wallet-card";

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
          <WalletCard {...activity} key={"activity-card-" + index} />
        ))}
      </div>
    </div>
  );
}
