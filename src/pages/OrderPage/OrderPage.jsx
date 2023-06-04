import { useState, useContext, useEffect } from "react";
import OrderList from "../../components/OrderList/OrderList";
import { OrderContext } from "../../App";
import OrderForm from "../../components/OrderForm/OrderForm";
import { PageContainer, Container, TotalPrice } from "./OrderPage.styled";

const countTotalPrice = (data) => {
  const total = data.reduce((acc, item) => {
    acc += item.price * item.quantity;

    return acc;
  }, 0);
  return total;
};
const currentOrder = JSON.parse(localStorage.getItem("currentOrder"));

const OrderPage = () => {
  const { order, setOrder } = useContext(OrderContext);
  const [totalPrice, setTotalPrice] = useState(() => countTotalPrice(order));

  useEffect(() => {
    if (!currentOrder) return;
    if (currentOrder.length > 0) {
      setOrder(currentOrder);
    }
  }, [setOrder]);

  useEffect(() => {
    localStorage.setItem("currentOrder", JSON.stringify(order));
    const price = countTotalPrice(order);
    setTotalPrice(price);
  }, [order]);

  const getTotalPrice = (data) => {
    const total = countTotalPrice(data);
    setTotalPrice(total);
  };

  return (
    <PageContainer>
      <Container>
        <OrderForm order={order} totalPrice={totalPrice} setOrder={setOrder} />
        <OrderList
          order={order}
          setOrder={setOrder}
          getTotalPrice={getTotalPrice}
        />
      </Container>
      <TotalPrice>Total Price: {totalPrice}</TotalPrice>
    </PageContainer>
  );
};

export default OrderPage;
