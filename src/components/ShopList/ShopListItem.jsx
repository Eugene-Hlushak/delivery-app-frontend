import { PropTypes } from "prop-types";
import { ListItem, Shop } from "./ShopList.styled";
import { getProductsByShop } from "../../../services/getProducts";

const ShopListItem = ({ shop, setProducts, isDisabled }) => {
  const productsHandler = async (shopId) => {
    const products = await getProductsByShop(shopId);
    console.log("products in shoplist -->", products);
    localStorage.setItem("currentProducts", JSON.stringify(products));
    const currentProducts = JSON.parse(localStorage.getItem("currentProducts"));
    console.log("currentProducts in shop list -->", currentProducts);
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
