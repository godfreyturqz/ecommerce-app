import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { rootReducer } from "./rootReducer";
import Cookie from 'js-cookie'

const cartItems = Cookie.getJSON('cartItems') || []
const initialState = {cart: {cartItems}}
const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))
export default store