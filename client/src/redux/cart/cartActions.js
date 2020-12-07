// import axios from "axios";


export const addToCart = (productId, quantity) => async (dispatch) => {

    try {
        const data = JSON.parse(localStorage.getItem('getProducts')).find(product => product._id === productId)
        // const {data} = await axios.get(`/api/products/${productId}`)
        // localStorage.setItem('cart', JSON.stringify(data))
        dispatch({
            type: 'ADD_TO_CART_SUCCESS',
            payload: {
                productId: data._id,
                mainCategory: data.mainCategory,
                subCategory: data.subCategory,
                brand: data.brand,
                name: data.name,
                image: data.image,
                price: data.price,
                quantity: quantity
            }
        })
    }
    catch (error) {
        dispatch({type: 'ADD_TO_CART_FAIL', payload: error.message})
    }
}


export const removeFromCart = (productId) => (dispatch) => {
    // const data = JSON.parse(localStorage.getItem('cart')).filter(product => product._id !== productId)
    // localStorage.setItem('cart', JSON.stringify(data))
    // localStorage.removeItem('cart', productId)
    dispatch({type: 'REMOVE_FROM_CART', payload: productId})
}