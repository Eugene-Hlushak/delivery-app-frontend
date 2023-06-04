import { PropTypes } from "prop-types";
import { ImgThumb, ProductCard, RemoveProduct } from "./OrderList.stylde";

const OrderListItem = ({ product, deleteProduct, quantityHandler }) => {
  return (
    <li>
      <ProductCard>
        <ImgThumb>
          <img src="" alt="FOOD" />
        </ImgThumb>
        <div>
          <p>{product.name}</p>
          <p>{product.price * product.quantity} uah</p>
          <label>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => {
                quantityHandler(e, product._id);
              }}
            />
          </label>
          <RemoveProduct
            onClick={() => {
              deleteProduct(product._id);
            }}
          >
            Delete
          </RemoveProduct>
        </div>
      </ProductCard>
    </li>
  );
};
OrderListItem.propTypes = {
  product: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  quantityHandler: PropTypes.func.isRequired,
};
export default OrderListItem;
