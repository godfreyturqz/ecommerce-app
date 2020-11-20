//function
import { combineReducers } from "redux";
//reducers
import { createOrderReducer, getOrdersReducer } from "./order/orderReducers";
import { createProductReducer, getProductsReducer, getProductDetailsReducer, updateProductReducer, deleteProductReducer } from "./product/productReducers";
import { cartReducer } from "./cart/cartReducers";
import { userSignInReducer } from "./user/userReducers";

export const rootReducer = combineReducers({
    // ORDER
    createOrderReducer,
    getOrdersReducer,
    // PRODUCT
    createProductReducer,
    getProductsReducer,
    getProductDetailsReducer,
    updateProductReducer,
    deleteProductReducer,
    //
    cartReducer,
    userSignInReducer
    
})