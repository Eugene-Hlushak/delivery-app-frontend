import styled from "styled-components";

export const ProductsContainer = styled.div`
  overflow-y: scroll;
  padding: 10px;
  width: 880px;
  border: 1px solid white;
  border-radius: 10px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
export const ProductCard = styled.div`
  text-align: right;
  padding: 10px;
  width: 250px;
  /* height: 250px; */
  border: 1px solid white;
`;

export const ImgThumb = styled.div`
  height: 150px;
  margin-bottom: 10px;
`;
