import { PropTypes } from "prop-types";

const OrderListItem = ({ product, deleteProduct, quantityHandler }) => {
  return (
    <li>
      <div>
        <img src="" alt="FOOD" />
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
          <button
            onClick={() => {
              deleteProduct(product._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};
OrderListItem.propTypes = {
  product: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  quantityHandler: PropTypes.func.isRequired,
};
export default OrderListItem;
