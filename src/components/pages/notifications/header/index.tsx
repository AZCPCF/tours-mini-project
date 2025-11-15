import {
  HeadphoneFillIcon,
  HeadphoneIcon,
  NotificationFillIcon,
  NotificationOutlineIcon,
} from "@/assets/icons";
import { BackLink } from "@/components/common/back-link";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

const NotificationsHeader = ({
  active = "notifications",
}: {
  active?: "support" | "notifications";
}) => {
  return (
    <header className="bg-white flex w-full justify-between px-4">
      <div className="flex gap-4 justify-evenly w-full py-4 text-[16px]">
        <Link
          to={"/supports"}
          className={cn(
            "text-gray-400 flex justify-center items-center flex-col  gap-2",
            active == "support" && "text-primary"
          )}
        >
          {active == "support" ? <HeadphoneFillIcon /> : <HeadphoneIcon />}
          <p>پشتیبانی</p>
        </Link>
        <Link
          to={"/notifications"}
          className={cn(
            "flex justify-center items-center flex-col gap-2 text-gray-400 relative",
            active == "notifications" && "text-primary"
          )}
        >
          {active == "notifications" ? (
            <NotificationFillIcon />
          ) : (
            <NotificationOutlineIcon />
          )}
          <p>اعلان‌ها</p>
          {active == "notifications" ? (
            <div className="bg-[#F25267] w-5 h-5 absolute -top-2 -right-3 text-white rounded-full text-center flex justify-center items-center">
              1
            </div>
          ) : undefined}
        </Link>
      </div>
      <BackLink />
    </header>
  );
};

export default NotificationsHeader;
