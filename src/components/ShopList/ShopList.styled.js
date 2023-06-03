import styled from "styled-components";

export const ShopContainer = styled.div`
  padding: 10px;
  width: 300px;
  border: 1px solid white;
  border-radius: 10px;
`;

export const ListItem = styled.li`
  padding: 10px;
  border: 1px solid white;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
