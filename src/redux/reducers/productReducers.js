import { productActions } from "../constants/action-types";


const initialState = {products: []};
export const setProductsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case productActions.SET_PRODUCTS:
            return {... state, products: payload}
        default:
            return state;
    }
}

export const setProductDetailsReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case productActions.SET_PRODUCT_DETAILS:
            return {... state, ... payload};
        case productActions.CLEANUP_PRODUCT_DETAILS:
            return {};
        default:
            return state;
    }
}

