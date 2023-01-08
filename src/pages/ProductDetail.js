import React, { useEffect } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  console.log("홈", product);
  const { id } = useParams();
  useEffect(() => {
    dispatch(productAction.getProductOne(id));
  }, [dispatch, id]);
  return (
    <Container>
      <Row>
        <Col lg={6} className="detail-img">
          <img width="100%" src={product?.img} alt="프라다" />
        </Col>
        <Col lg={6} className="detail-context">
          <h1>{product?.title}</h1>
          <h6>{product?.price}</h6>
          <DropdownButton
            onClick={(e) => {
              e.preventDefault();
              console.log(e);
            }}
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
