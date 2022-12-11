import axios from "axios";
import Product from "../components/Product";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";

    const url = `http://my-json-server.typicode.com/boxman2/shopping-react/products?q=${searchQuery}`;
    const { data } = await axios.get(url);
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((el, i) => (
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
