import { useState, useEffect } from "react";

import ShopList from "../../components/ShopList/ShopList";
import ProductsList from "../../components/ProductsList/ProductsList";
import { PageContainer } from "./ShopPage.styled";
import { getShops } from "../../../services/getShops";

const ShopPage = () => {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const shops = async () => {
      try {
        const result = await getShops();
        console.log(result);
        setShops(result);
      } catch (error) {
        setError(error);
      }
    };

    shops();
  }, []);
  return (
    <div>
      <h1>Shop</h1>
      <PageContainer>
        <ShopList shops={shops} setProducts={setProducts} />
        <ProductsList products={products} />
      </PageContainer>
    </div>
  );
};
export default ShopPage;
