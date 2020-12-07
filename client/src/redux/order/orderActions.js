import axios from "axios";


export const createOrder = (order) => async (dispatch) => {
    dispatch({type: 'CREATE_ORDER_REQUEST'})
    try {
        const data = await axios.post(`/api/orders`, order)
        dispatch({type: 'CREATE_ORDER_SUCCESS', payload: data})
        dispatch({type: 'CART_EMPTY'})

    } catch (error) {
        dispatch({type: 'CREATE_ORDER_FAIL', payload: error})
    }
}

export const getOrders = () => async (dispatch) => {
    dispatch({type: 'GET_ORDER_REQUEST'})
    try {
        const data = await axios.get(`/api/orders`).then(({data})=> data.reverse())
        dispatch({type: 'GET_ORDER_SUCCESS', payload: data})
    } catch (error) {
        dispatch({type: 'GET_ORDER_FAIL', payload: error})
    }
}

export const getShippingData = (shippingData) => (dispatch) => {
    dispatch({type: 'GET_SHIPPING_DATA', payload: shippingData})
}

export const getPaymentMethod = (paymentMethod) => (dispatch) => {
    dispatch({type: 'GET_PAYMENT_METHOD', payload: paymentMethod})
}

export const getTotalPrice = (totalPrice) => (dispatch) => {
    dispatch({type: 'GET_TOTAL_PRICE', payload: totalPrice})
}