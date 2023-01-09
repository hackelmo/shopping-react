import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./pages/route/PrivateRoute";
import "./App.css";

const App = () => {
  console.log("navbar");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </>
  );
};

export default App;
