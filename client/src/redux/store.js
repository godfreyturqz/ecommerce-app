import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { rootReducer } from "./rootReducer";
// import Cookie from 'js-cookie'

// const cartItems = Cookie.getJSON('cartItems') || []
// const userInfo = Cookie.getJSON('userInfo') || null
// const initialState = {cart: {cartItems}, userSignIn: {userInfo}}
// const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store