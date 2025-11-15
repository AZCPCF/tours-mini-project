import { Route, Routes } from "react-router";
import IndexPage from "./pages/index";
import NotificationsPage from "./pages/notifications";
import SupportPage from "./pages/support";
import WalletPage from "./pages/wallet";
import SupportByIdPage from "./pages/support/id";

const App = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="wallet" element={<WalletPage />} />
      <Route path="supports" element={<SupportPage />} />
      <Route path="supports/:id" element={<SupportByIdPage />} />
      <Route path="notifications" element={<NotificationsPage />} />
      <Route path="*" element={<IndexPage />} />
    </Routes>
  );
};
export default App;
