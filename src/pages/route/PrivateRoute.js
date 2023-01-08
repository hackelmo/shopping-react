import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProductDetail from "../ProductDetail";

const PrivateRoute = () => {
  const { authenticate } = useSelector((state) => state.auth);
  return authenticate ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
