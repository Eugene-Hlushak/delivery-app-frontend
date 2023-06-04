import { useState, useEffect, useContext } from "react";
import { OrderContext } from "../../App";
import ShopList from "../../components/ShopList/ShopList";
import ProductsList from "../../components/ProductsList/ProductsList";
import {
  PageContainer,
  ResetButton,
  Container,
  TitleContainer,
} from "./ShopPage.styled";
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
    <PageContainer>
      <TitleContainer>
        <h2>What do yo prefer today?</h2>
        <ResetButton onClick={resetCart}>Reset cart</ResetButton>
      </TitleContainer>
      <Container>
        <ShopList shops={shops} setProducts={setProducts} order={order} />
        <ProductsList
          products={products}
          setProducts={setProducts}
          setOrder={setOrder}
          order={order}
        />
      </Container>
    </PageContainer>
  );
};
export default ShopPage;
