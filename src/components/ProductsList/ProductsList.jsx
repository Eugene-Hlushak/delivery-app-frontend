import { ProductsContainer } from "./ProductsList.styled";
import { PropTypes } from "prop-types";
import ProductListItem from "./ProductsListItem";
import { useEffect } from "react";

const currentProducts = JSON.parse(localStorage.getItem("currentProducts"));

const ProductsList = ({ products, setProducts, setOrder, order }) => {
  useEffect(() => {
    if (currentProducts) setProducts(currentProducts);
  }, [setProducts]);

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
  order: PropTypes.array.isRequired,
};
export default ProductsList;
