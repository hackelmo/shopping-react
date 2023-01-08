import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  product: {},
};

// 함수
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductList: (state, action) => {
      state.productList = action.payload;
    },
    getProductOne: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
