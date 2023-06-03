import { PropTypes } from "prop-types";

import { ListItem } from "./ShopList.styled";

const ShopListItem = ({ shop }) => {
  return <ListItem>{shop}</ListItem>;
};

ShopListItem.propTypes = {
  shop: PropTypes.string.isRequired,
};

export default ShopListItem;
