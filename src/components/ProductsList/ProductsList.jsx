import { ProductsContainer } from "./ProductsList.styled";
import { PropTypes } from "prop-types";
import ProductListItem from "./ProductsListItem";

const ProductsList = ({ products, setOrder, order }) => {
  return (
    <ProductsContainer>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductListItem
            key={product._id}
            product={product}
            setOrder={setOrder}
            order={order}
          />
        ))}
      </ul>
    </ProductsContainer>
  );
};
ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  setOrder: PropTypes.func.isRequired,
};
export default ProductsList;
