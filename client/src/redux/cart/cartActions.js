import axios from "axios";
import Cookie from 'js-cookie'

function cartAddItem(data, qty){
    return {
        type: 'CART_ADD_ITEM',
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            stockCount: data.stockCount,
            qty
        }
    }
}

export function addToCart(productId, qty){
    return function(dispatch, getState){
        axios.get('/api/products/' + productId)
        .then(res =>{
            dispatch(cartAddItem(res.data ,qty))
        })
        const {cart: {cartItems}} = getState()
        Cookie.set("cartItems", JSON.stringify(cartItems))
    }
}

function cartRemoveItem(productId){
    return {
        type: 'CART_REMOVE_ITEM',
        payload: productId
    }
}

export function removeFromCart(productId){
    return function(dispatch, getState) {
        dispatch(cartRemoveItem(productId))

        const {cart: {cartItems}} = getState()
        Cookie.set("cartItems", JSON.stringify(cartItems))
    }
}