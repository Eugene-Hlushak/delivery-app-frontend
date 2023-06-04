import { useState, useEffect, useContext } from "react";
import { OrderContext } from "../../App";
import ShopList from "../../components/ShopList/ShopList";
import ProductsList from "../../components/ProductsList/ProductsList";
import { PageContainer, ResetButton } from "./ShopPage.styled";
import { getShops } from "../../../services/getShops";

const ShopPage = () => {
  const { order, setOrder } = useContext(OrderContext);
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const shops = async () => {
      try {
        const result = await getShops();
        setShops(result);
      } catch (error) {
        setError(error);
      }
    };

    shops();
  }, []);

  const resetCart = () => {
    localStorage.setItem("currentOrder", JSON.stringify([]));
    setOrder([]);
  };

  return (
    <div>
      <PageContainer>
        <ResetButton onClick={resetCart}>Reset cart</ResetButton>
        <ShopList shops={shops} setProducts={setProducts} order={order} />
        <ProductsList
          products={products}
          setProducts={setProducts}
          setOrder={setOrder}
          order={order}
        />
      </PageContainer>
    </div>
  );
};
export default ShopPage;
