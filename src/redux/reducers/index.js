import { combineReducers } from "redux";
import { setProductsReducer } from "./productReducers";
import { setProductDetailsReducer } from "./productReducers";

export default combineReducers({setProductsReducer, setProductDetailsReducer});