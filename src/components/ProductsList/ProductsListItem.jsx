import { PropTypes } from "prop-types";
import { ProductCard } from "./ProductsList.styled";
const ProductListItem = ({ product }) => {
  // const addToCart = () => {};
  return (
    <li>
      <ProductCard>
        <img src="" alt="FOOD" />
        <div>
          <p>{product.name}</p>
          <p>{product.price} uah</p>
          <button>Add to cart</button>
        </div>
      </ProductCard>
    </li>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.func.isRequired,
};
export default ProductListItem;
