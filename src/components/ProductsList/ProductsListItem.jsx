import { PropTypes } from "prop-types";
import { ProductCard, ImgThumb, AddProduct } from "./ProductsList.styled";

const ProductListItem = ({ product, setOrder, order }) => {
  const checkCart = (id) => {
    const check = order.find((item) => item._id === id);
    return check;
  };
  const addToCart = (id) => {
    const check = checkCart(id);
    if (check) {
      return;
    }
    const newOrderItem = { ...product, quantity: 1 };
    setOrder((prev) => [...prev, { ...newOrderItem }]);
  };

  return (
    <li>
      <ProductCard>
        <ImgThumb>
          <img src="" alt={product.name} />
        </ImgThumb>
        <div>
          <p>{product.name}</p>
          <p>{product.price} uah</p>
          <AddProduct onClick={() => addToCart(product._id)}>
            Add to cart
          </AddProduct>
        </div>
      </ProductCard>
    </li>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
  setOrder: PropTypes.func.isRequired,
  order: PropTypes.array.isRequired,
};
export default ProductListItem;
