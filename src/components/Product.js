import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Product = ({ item }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <Card onClick={onClick}>
      <img alt="제품" width="100%" src={item?.img} />
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new ? "신제품" : ""}</div>
    </Card>
  );
};
const Card = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export default Product;
