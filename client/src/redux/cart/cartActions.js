import axios from "axios";

//action
function cartAddItem(data, quantity){
    return {
        type: 'ADD_TO_CART_SUCCESS',
        payload: {
            productId: data._id,
            mainCategory: data.mainCategory,
            subCategory: data.subCategory,
            brand: data.brand,
            name: data.name,
            image: data.image,
            price: data.price,
            stockCount: data.stockCount,
            quantity: quantity
        }
    }
}
//action creator ADD TO CART
export const addToCart = (productId, quantity) => async (dispatch) => {

    try {
        const {data} = await axios.get(`/api/products/${productId}`)
        dispatch(cartAddItem(data ,quantity))
    }
    catch (error) {
        console.log(error)
        dispatch({type: 'ADD_TO_CART_FAIL', payload: error.message})
    }
}

//action creator REMOVE FROM CART
export const removeFromCart = (productId) => (dispatch) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: productId})
}






