import { PropTypes } from "prop-types";
import { ListItem } from "./ShopList.styled";
import { getProductsByShop } from "../../../services/getProducts";

const ShopListItem = ({ shop, setProducts }) => {
  const productsHandler = async (shopId) => {
    const products = await getProductsByShop(shopId);
    setProducts(products);
  };

  return (
    <ListItem>
      <button
        onClick={() => {
          productsHandler(shop._id);
        }}
      >
        {shop.name}
      </button>
    </ListItem>
  );
};

ShopListItem.propTypes = {
  shop: PropTypes.func.isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default ShopListItem;
