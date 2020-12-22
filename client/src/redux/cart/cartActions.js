export const addToCart = (productId, quantity) => (dispatch, getState) => {

    const data = getState().getProductsReducer.data
                .find(product => product._id === productId)
    dispatch({type: 'ADD_TO_CART_SUCCESS', payload: {...data, quantity}})
}

export const removeFromCart = (productId) => {
    return {type: 'REMOVE_FROM_CART', payload: productId}
}
