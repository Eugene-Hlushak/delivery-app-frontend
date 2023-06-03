import { ProductsContainer } from "./ProductsList.styled";
import { PropTypes } from "prop-types";
import ProductListItem from "./ProductsListItem";

const ProductsList = ({ products }) => {
  return (
    <ProductsContainer>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductListItem key={product._id} product={product} />
        ))}
      </ul>
    </ProductsContainer>
  );
};
ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};
export default ProductsList;
