import ShopList from "../../components/ShopList/ShopList";
import ProductsList from "../../components/ProductsList/ProductsList";
import { PageContainer } from "./ShopPage.styled";

const ShopPage = () => {
  return (
    <div>
      <h1>Shop</h1>
      <PageContainer>
        <ShopList />
        <ProductsList />
      </PageContainer>
    </div>
  );
};
export default ShopPage;
