import { PropTypes } from "prop-types";
import { ShopContainer } from "./ShopList.styled";
import ShopListItem from "./ShopListItem";

const ShopList = ({ shops, setProducts }) => {
  return (
    <ShopContainer>
      <h2>Choose your shop</h2>
      <ul>
        {shops.map((shop) => (
          <ShopListItem key={shop._id} shop={shop} setProducts={setProducts} />
        ))}
      </ul>
    </ShopContainer>
  );
};
ShopList.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProducts: PropTypes.func.isRequired,
};
export default ShopList;
