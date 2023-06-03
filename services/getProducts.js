import axios from "axios";
const url = import.meta.env.VITE_REACT_APP_API_SHOPS_URL;

const products = axios.create({
  baseURL: url,
});

export const getProductsByShop = async (id) => {
  const { data } = await products.get(`/${id}/products`);

  return data;
};
