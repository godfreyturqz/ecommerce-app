//function
import { combineReducers } from "redux";
//reducers
import { cartReducer } from "./cart/cartReducers";
import { productListReducer, productDetailsReducer } from "./product/productReducers";
import { userSignInReducer } from "./user/userReducers";

export const rootReducer = combineReducers({
    productListReducer,
    productDetailsReducer,
    cartReducer,
    userSignInReducer
})