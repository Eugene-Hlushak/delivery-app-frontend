import { ProductsContainer } from "./ProductsList.styled";

const ProductsList = () => {
  return (
    <ProductsContainer>
      <h2>Products of McDonnalds</h2>
      <ul>
        <li>Cheeseburger</li>
        <li>Chicken McNuggets</li>
        <li>CocaCola S</li>
        <li>Double Burger</li>
        <li>Happy Meal</li>
      </ul>
    </ProductsContainer>
  );
};

export default ProductsList;
