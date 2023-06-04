import { PropTypes } from "prop-types";
import { ShopContainer } from "./ShopList.styled";
import ShopListItem from "./ShopListItem";
import { useState, useEffect } from "react";

const ShopList = ({ shops, setProducts, order }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (order.length > 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [order.length]);

  return (
    <ShopContainer>
      <ul>
        {shops.map((shop) => (
          <ShopListItem
            key={shop._id}
            shop={shop}
            setProducts={setProducts}
            isDisabled={isDisabled}
          />
        ))}
      </ul>
    </ShopContainer>
  );
};

ShopList.propTypes = {
  shops: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
  order: PropTypes.array.isRequired,
};
export default ShopList;
