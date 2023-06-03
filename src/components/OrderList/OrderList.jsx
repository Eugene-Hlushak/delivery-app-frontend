import { OrderContext } from "../../App";
import OrderListItem from "./OrderListItem";
import { useContext } from "react";
const OrderList = () => {
  const { order, setOrder } = useContext(OrderContext);
  const deleteProduct = (id) => {
    const correctOrder = order.filter(({ _id }) => _id !== id);
    setOrder(correctOrder);
  };
  return (
    <ul>
      {order.map((product) => (
        <OrderListItem
          key={product._id}
          product={product}
          deleteProduct={deleteProduct}
        />
      ))}
    </ul>
  );
};
export default OrderList;
