
import { MenuIcon, NotificationIcon, WalletIcon } from "@/assets/icons";
import { HeaderLink } from "./header-link";

const IndexHeader = () => {
  return (
    <header className="bg-white flex justify-between py-4 px-2 drop-shadow-xs">
      <div className="flex gap-4">
        <HeaderLink icon={NotificationIcon} to={'/notifications'} />
        <HeaderLink icon={WalletIcon} to={'/wallet'} badge />
      </div>
      <HeaderLink icon={MenuIcon} to={'/'} />
    </header>
  );
};
export default IndexHeader;
