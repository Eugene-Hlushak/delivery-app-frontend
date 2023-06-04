import { PropTypes } from "prop-types";
import { useState } from "react";
import { ProductCard } from "./ProductsList.styled";

const ProductListItem = ({ product, setOrder, order }) => {
  const checkCart = (id) => {
    console.log(order);
    const check = order.find((item) => item._id === id);
    return check;
  };
  const addToCart = (id) => {
    const check = checkCart(id);
    console.log("check", check);
    if (check) {
      return;
    }
    const newOrderItem = { ...product, quantity: 1 };
    setOrder((prev) => [...prev, { ...newOrderItem }]);
  };

  return (
    <li>
      <ProductCard>
        <img src="" alt={product.name} />
        <div>
          <p>{product.name}</p>
          <p>{product.price} uah</p>
          <button onClick={() => addToCart(product._id)}>Add to cart</button>
        </div>
      </ProductCard>
    </li>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
  setOrder: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};
export default ProductListItem;
