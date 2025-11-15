import type { WalletActivity } from "@/data/wallet";
import { useMemo } from "react";

type FilterType = "all" | "increment" | "decrement";

export function useWalletFilter(
  activities: WalletActivity[],
  search: string,
  filter: FilterType
) {
  const filtered = useMemo(() => {
    return activities.filter((a) => {
      const matchesSearch = a.title.includes(search);
      const matchesFilter = filter === "all" ? true : a.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [activities, search, filter]);

  return filtered;
}
