import { ShopContainer } from "./ShopList.styled";
import ShopListItem from "./ShopListItem";
const shops = ["McDonnald's", "KFC", "Yoki", "Pronto Pizza"];

const ShopList = () => {
  return (
    <ShopContainer>
      <h2>Choose your shop</h2>
      <ul>
        {shops.map((shop) => (
          <ShopListItem key={shop} shop={shop} />
        ))}
      </ul>
    </ShopContainer>
  );
};

export default ShopList;
