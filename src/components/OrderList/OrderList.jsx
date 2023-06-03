import { OrderContext } from "../../App";
import OrderListItem from "./OrderListItem";
import { useContext, useCallback } from "react";
const OrderList = () => {
  const { order, setOrder } = useContext(OrderContext);

  const quantityHandler = useCallback(
    (e, id) => {
      const quantity = e.target.value;
      if (quantity < 1) return;
      const newOrder = order.reduce((acc, item) => {
        item._id === id ? acc.push({ ...item, quantity }) : acc.push(item);
        return acc;
      }, []);
      setOrder(newOrder);
    },
    [order, setOrder]
  );

  const deleteProduct = (id) => {
    const correctOrder = order.filter(({ _id }) => _id !== id);
    setOrder(correctOrder);
  };

  return (
    <ul>
      {order.map((product) => (
        <OrderListItem
          key={product._id}
          quantityHandler={quantityHandler}
          product={product}
          deleteProduct={deleteProduct}
        />
      ))}
    </ul>
  );
};
export default OrderList;
