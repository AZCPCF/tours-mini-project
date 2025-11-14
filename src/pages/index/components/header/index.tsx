
import { MenuIcon, NotificationIcon, WalletIcon } from "@/assets/icons";
import { HeaderLink } from "./header-button";

const Header = () => {
  return (
    <header className="bg-white h-[90px] flex justify-between p-4 drop-shadow-xs">
      <div className="flex gap-4">
        <HeaderLink icon={NotificationIcon} to={'/notifications'} />
        <HeaderLink icon={WalletIcon} to={'/wallet'} badge />
      </div>
      <HeaderLink icon={MenuIcon} to={'/'} />
    </header>
  );
};
export default Header;
