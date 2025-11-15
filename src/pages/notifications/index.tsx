import NotificationsHeader from "@/components/pages/notifications/header";
import NotificationList from "@/components/pages/notifications/notification-list";

export default function NotificationsPage() {
  return (
    <div>
      <NotificationsHeader active="notifications" />
      <NotificationList />
    </div>
  );
}
