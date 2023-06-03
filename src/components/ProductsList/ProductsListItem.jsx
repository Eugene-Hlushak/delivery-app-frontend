const products = [
  "CocaCola M",
  "Cheeseburger",
  "Chicken McNuggets",
  "Double Burger",
];

const ProductListItem = () => {
  return (
    <>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </>
  );
};

export default ProductListItem;
