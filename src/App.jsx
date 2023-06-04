import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import ShopPage from "./pages/ShopPage/ShopPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import "./App.css";
export const OrderContext = createContext();

function App() {
  const [order, setOrder] = useState([]);
  // console.log(order);
  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
      </Routes>
    </OrderContext.Provider>
  );
}

export default App;
