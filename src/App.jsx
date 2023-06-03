import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import ShopPage from "./pages/ShopPage/ShopPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ShopPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Route>
    </Routes>
  );
}

export default App;
