import axios from "axios";
const url = import.meta.env.VITE_REACT_APP_API_SHOPS_URL;

const shops = axios.create({
  baseURL: url,
});

export const getShops = async () => {
  const { data } = await shops.get();

  return data;
};
