import apiHandler from "../apiHandler";
import { productActions } from "../constants/action-types";

export const getProducts = () => async (dispatch) => {
  const response = await apiHandler.get("/products");
  dispatch({ type: productActions.SET_PRODUCTS, payload: response.data });
};

export const getProductDetails = (id) => async (dispatch) => {
  const response = await apiHandler.get(`/products/${id}`);
  dispatch({ type: productActions.SET_PRODUCT_DETAILS, payload: response.data });
};

export const setProducts = (products) => {
    return { type: productActions.SET_PRODUCTS, payload: products};
}

export const setProductDetails = (product) => {
    return { type: productActions.SET_PRODUCT_DETAILS, payload: product};
}

export const cleanUpProductDetails = () => {
    return {type: productActions.CLEANUP_PRODUCT_DETAILS}
}