import { useState, useEffect, useContext } from "react";
import OrderList from "../../components/OrderList/OrderList";
import { OrderContext } from "../../App";
const OrderPage = () => {
  const { order, setOrder } = useContext(OrderContext);
  const [totalPrice, setTotalPrice] = useState(() =>
    order.reduce((acc, item) => {
      acc += item.price * item.quantity;

      return acc;
    }, 0)
  );

  const getTotalPrice = (data) => {
    const total = data.reduce((acc, item) => {
      acc += item.price * item.quantity;

      return acc;
    }, 0);
    setTotalPrice(total);
  };

  return (
    <div>
      <h2>Here is your order</h2>
      <OrderList
        order={order}
        setOrder={setOrder}
        getTotalPrice={getTotalPrice}
      />
      <p>{totalPrice}</p>
    </div>
  );
};

export default OrderPage;
