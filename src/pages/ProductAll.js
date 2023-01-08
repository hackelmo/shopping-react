import Product from "../components/Product";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const ProductAll = () => {
  //유즈샐랙터가 먼저가나? 값이없지않나?
  const productList = useSelector((state) => state.product.productList);
  console.log(productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList?.map((el, i) => (
            <Col key={`productList-${i}`} lg={3} md={6} sm={12}>
              <Product item={el} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
