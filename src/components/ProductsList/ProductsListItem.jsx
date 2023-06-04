import { PropTypes } from "prop-types";
import { OrderContext } from "../../App";
import { useContext } from "react";
import { ProductCard } from "./ProductsList.styled";

const ProductListItem = ({ product }) => {
  const { setOrder } = useContext(OrderContext);
  const addToCart = () => {
    const newOrderItem = { ...product, quantity: 1 };
    setOrder((prev) => [...prev, { ...newOrderItem }]);
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
};
export default ProductListItem;
