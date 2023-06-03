import OrderListItem from "./OrderListItem";
const OrderList = ({ order, setOrder, getTotalPrice }) => {
  const quantityHandler = (e, id) => {
    const quantity = e.target.value;

    if (quantity < 1) return;
    const newOrder = order.reduce((acc, item) => {
      item._id === id ? acc.push({ ...item, quantity }) : acc.push(item);
      return acc;
    }, []);

    setOrder(newOrder);
    getTotalPrice(newOrder);
  };

  const deleteProduct = (id) => {
    const correctOrder = order.filter(({ _id }) => _id !== id);
    setOrder(correctOrder);
    getTotalPrice(correctOrder);
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
