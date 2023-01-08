import axios from "axios";
import { productActions } from "../reducers/productReducer";

const getProducts = (searchQuery) => {
  return async (dispatch, getState) => {
    const url = `http://my-json-server.typicode.com/boxman2/shopping-react/products?q=${searchQuery}`;
    const { data } = await axios.get(url);
    dispatch(productActions.getProductList(data));
  };
};
///리덕스툴킷안썼을때

const getProductOne = (id) => {
  return async (dispatch, getState) => {
    let url = `http://my-json-server.typicode.com/boxman2/shopping-react/products/${id}`;
    const { data } = await axios.get(url);
    console.log(data);
    dispatch(productActions.getProductOne(data));
  };
};

export const productAction = { getProducts, getProductOne };
