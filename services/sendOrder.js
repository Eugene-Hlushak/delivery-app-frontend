import axios from "axios";
const orderUrl = import.meta.env.VITE_REACT_APP_API_ORDERS_URL;

const order = axios.create({
  baseURL: orderUrl,
});

export const sendOrder = async (data) => {
  console.log("sendOrder --> ", data);
  const result = await order.post(orderUrl, data);
  console.log("received --> ", result);
  return result;
};
