import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const getProductDetail = async () => {
    let url = `http://localhost:3001/products/${id}`;
    const { data } = await axios.get(url);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col lg={6} className="detail-img">
          <img width={400} src={product?.img} />
        </Col>
        <Col lg={6} className="detail-context">
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <DropdownButton
            id="dropdown-basic-button"
            title="사이즈 선택"
            variant="secondary"
          >
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
