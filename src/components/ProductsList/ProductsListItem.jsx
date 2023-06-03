import { PropTypes } from "prop-types";
import { OrderContext } from "../../App";
import { useContext } from "react";
import { ProductCard } from "./ProductsList.styled";
const ProductListItem = ({ product }) => {
  const { order, setOrder } = useContext(OrderContext);
  console.log(order);
  const addToCart = () => {
    setOrder((prev) => [...prev, { ...product, quantity: 1 }]);
  };
  return (
    <li>
      <ProductCard>
        <img src="" alt="FOOD" />
        <div>
          <p>{product.name}</p>
          <p>{product.price} uah</p>
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </ProductCard>
    </li>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
  setOrder: PropTypes.func.isRequired,
};
export default ProductListItem;
