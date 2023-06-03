import axios from "axios";
const url = import.meta.env.VITE_REACT_APP_API_URL;

export const getShops = async () => {
  console.log(url);

  const { data } = await axios.get(import.meta.env.VITE_REACT_APP_API_URL);

  return data;
};

export const getShopInfo = async (id) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_REACT_APP_API_URL}/${id}`
  );
  console.log("data", data);
  return data;
};
