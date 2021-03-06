import { ApiRequest } from "../../services/ApiRequest"


export const createOrder = (order) => async (dispatch) => {
    
    try {
        dispatch({type: 'CREATE_ORDER_REQUEST'})
        const data = await new ApiRequest('POST', '', order).orders()
        dispatch({type: 'CREATE_ORDER_SUCCESS', payload: data})
        dispatch({type: 'CART_EMPTY'})
    } catch (error) {
        dispatch({type: 'CREATE_ORDER_FAIL', payload: error.message})
    }
}

export const getOrders = () => async (dispatch) => {
    
    try {
        dispatch({type: 'GET_ORDER_REQUEST'})
        const {data} = await new ApiRequest('GET').orders()
        dispatch({type: 'GET_ORDER_SUCCESS', payload: data})
    } catch (error) {
        dispatch({type: 'GET_ORDER_FAIL', payload: error.message})
    }
}

export const getOrderDetails = (orderId) => async (dispatch) => {
    
    try {
        dispatch({type: 'GET_ORDER_DETAILS_REQUEST'})
        const {data} = await new ApiRequest('GET', orderId).orders()
        dispatch({type: 'GET_ORDER_DETAILS_SUCCESS', payload: data})
    } catch (error) {
        dispatch({type: 'GET_ORDER_DETAILS_ERROR', payload: error.message})
    }
}

export const getUserOrders = (userId) => async (dispatch) => {
    
    try {
        dispatch({type: 'GET_USER_ORDERS_REQUEST'})
        const {data} = await new ApiRequest('GET', userId).userOrders()
        dispatch({type: 'GET_USER_ORDERS_SUCCESS', payload: data})
    } catch (error) {
        dispatch({type: 'GET_USER_ORDERS_ERROR', payload: error.message})
    }
}


export const getShippingData = (shippingData) => {
    return {type: 'GET_SHIPPING_DATA', payload: shippingData}
}

export const getPaymentMethod = (paymentMethod) => {
    return {type: 'GET_PAYMENT_METHOD', payload: paymentMethod}
}

export const getTotalPrice = (totalPrice) => {
    return {type: 'GET_TOTAL_PRICE', payload: totalPrice}
}