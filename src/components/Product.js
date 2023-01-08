import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Product = ({ item }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div onClick={onClick}>
      <Img alt="제품" width="100%" src={item?.img} />
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new ? "신제품" : ""}</div>
    </div>
  );
};
const Img = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

export default Product;
