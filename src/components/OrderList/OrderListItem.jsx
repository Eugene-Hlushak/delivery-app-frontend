import { PropTypes } from "prop-types";

const OrderListItem = ({ product, deleteProduct }) => {
  return (
    <li>
      <div>
        <img src="" alt="FOOD" />
        <div>
          <p>{product.name}</p>
          <p>{product.price} uah</p>
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
};
export default OrderListItem;
