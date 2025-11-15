import { NotificationOutlinePrimaryIcon } from "@/assets/icons";
import type { Notification } from "@/data/notifications";
import { cn } from "@/lib/utils";

type NotificationCardProps = {
  notification: Notification;
  onClick?: () => void;
  className?: string;
};

export const NotificationCard = ({
  notification,
  className,
}: NotificationCardProps) => {
  return (
    <div
      className={cn(
        "bg-white text-neutral-900 w-full rounded-[18px] p-5 flex items-start direction-rtl gap-3",
        className
      )}
    >
      <div className="bg-[#E0F2FE] w-14 aspect-square rounded-full flex justify-center items-center relative">
        {notification.id == "n1" ? (
          <div className="bg-[#f25267] w-1.5 aspect-square rounded-full absolute top-2.5 right-2.5"></div>
        ) : undefined}
        <NotificationOutlinePrimaryIcon />
      </div>
      <div className="flex flex-wrap w-full gap-2">
        <div className="w-full flex justify-between">
          <h1 className="w-max text-lg">{notification.title}</h1>
          <p className="text-sm text-gray-400">{notification.date}</p>
        </div>

        <p className="text-gray-400">{notification.description}</p>
        <div className="flex justify-end w-full">
          {notification.action?.label ? (
            <button
              onClick={notification.action.onClick}
              className="bg-primary rounded-xl py-2 px-5 text-white"
            >
              {notification.action.label}
            </button>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};
