import { useState, useContext, useEffect } from "react";
import OrderList from "../../components/OrderList/OrderList";
import { OrderContext } from "../../App";
import OrderForm from "../../components/OrderForm/OrderForm";

const countTotalPrice = (data) => {
  const total = data.reduce((acc, item) => {
    acc += item.price * item.quantity;

    return acc;
  }, 0);
  return total;
};

const OrderPage = () => {
  const { order, setOrder } = useContext(OrderContext);
  const [totalPrice, setTotalPrice] = useState(() => countTotalPrice(order));

  useEffect(() => {
    const currentOrder = JSON.parse(localStorage.getItem("currentOrder"));
    console.log(currentOrder);
    if (!currentOrder) {
      localStorage.setItem("currentOrder", JSON.stringify(order));
      return;
    }
    // setOrder(currentOrder);
  }, [order, setOrder]);

  const getTotalPrice = (data) => {
    const total = countTotalPrice(data);
    setTotalPrice(total);
  };

  return (
    <div>
      <h2>Here is your order</h2>
      <OrderForm order={order} totalPrice={totalPrice} />
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