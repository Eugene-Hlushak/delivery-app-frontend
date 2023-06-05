import { PropTypes } from "prop-types";
import { ListItem, Shop } from "./ShopList.styled";
import { getProductsByShop } from "../../../services/getProducts";

const ShopListItem = ({ shop, setProducts, isDisabled }) => {
  const productsHandler = async (shopId) => {
    const products = await getProductsByShop(shopId);
    sessionStorage.setItem("currentProducts", JSON.stringify(products));
    setProducts(products);
  };

  return (
    <ListItem>
      <Shop
        disabled={isDisabled}
        onClick={() => {
          productsHandler(shop._id);
        }}
      >
        {shop.name}
      </Shop>
    </ListItem>
  );
};

ShopListItem.propTypes = {
  shop: PropTypes.object.isRequired,
  setProducts: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default ShopListItem;
