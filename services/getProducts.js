import axios from "axios";
const url = import.meta.env.VITE_REACT_APP_API_URL;

const products = axios.create({
  baseURL: url,
});

export const getProductsByShop = async (id) => {
  console.log(url);

  const { data } = await products.get(`/${id}/products`);
  console.log(data);
  return data;
};
