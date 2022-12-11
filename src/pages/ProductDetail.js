import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const getProductDetail = async () => {
    let url = `http://my-json-server.typicode.com/boxman2/shopping-react/products/${id}`;
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
          <img width="100%" src={product?.img} />
        </Col>
        <Col lg={6} className="detail-context">
          <h1>{product?.title}</h1>
          <h6>{product?.price}</h6>
          <DropdownButton
            id="dropdown-basic-button"
            title="사이즈 선택"
            variant="secondary"
          >
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
          <Button className="purchase-button" variant="dark">
            구매하기
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
