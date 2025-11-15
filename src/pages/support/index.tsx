import NotificationsHeader from "@/components/pages/notifications/header";
import AddSupport from "@/components/pages/support/add-support";
import SupportList from "@/components/pages/support/support-list";

export default function SupportPage() {
  return (
    <div>
      <NotificationsHeader active="support" />
      <SupportList />
      <AddSupport />
    </div>
  );
}
