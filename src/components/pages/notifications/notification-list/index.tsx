import { notifications } from "@/data/notifications";
import { NotificationCard } from "./notification-card";

const NotificationList = () => {
  return (
    <div className="flex flex-wrap gap-3 direction-rtl mx-3 mt-8">
      {notifications.map((notification, index) => (
        <NotificationCard
          notification={notification}
          key={"activity-card-" + index}
        />
      ))}
    </div>
  );
};
export default NotificationList;
