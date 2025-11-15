import { Route, Routes } from "react-router";
import IndexPage from "./pages/index";
import WalletPage from "./pages/wallet";

const App = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="wallet" element={<WalletPage />} />
      <Route path="*" element={<IndexPage />} />
    </Routes>
  );
};
export default App;
