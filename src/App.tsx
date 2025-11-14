import { Route, Routes } from "react-router";
import IndexPage from "./pages/index";

const App = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="*" element={<IndexPage />} />
    </Routes>
  );
};
export default App;
