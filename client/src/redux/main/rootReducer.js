//function
import { combineReducers } from "redux";
//reducers
import { createOrderReducer, orderDetailsReducer, getOrdersReducer, getOrderDetailsReducer, getUserOrdersReducer } from "../order/orderReducers";
import { createProductReducer, getProductsReducer, getProductDetailsReducer, updateProductReducer, deleteProductReducer } from "../product/productReducers";
import { cartReducer } from "../cart/cartReducers";
import { authReducer } from "../auth/authReducers";

export const rootReducer = combineReducers({
    // ORDER
    createOrderReducer,
    orderDetailsReducer,
    getOrdersReducer,
    getOrderDetailsReducer,
    getUserOrdersReducer,
    // PRODUCT
    createProductReducer,
    getProductsReducer,
    getProductDetailsReducer,
    updateProductReducer,
    deleteProductReducer,
    //
    cartReducer,
    authReducer
})