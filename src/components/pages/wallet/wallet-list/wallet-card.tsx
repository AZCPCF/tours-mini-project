import { DecreaseIcon, IncreaseIcon } from "@/assets/icons";
import { Price } from "@/components/common/price";
import type { WalletActivity } from "@/data/wallet";

export const WalletCard = (activity: WalletActivity) => {
  return (
    <div className="bg-white text-neutral-900 w-full rounded-[18px] p-5 flex justify-between items-center">
      <div className="flex gap-2">
        {activity.type == "increment" ? <IncreaseIcon /> : <DecreaseIcon />}
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
  );
};
