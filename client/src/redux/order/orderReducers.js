export function createOrderReducer(state= { loading: false, data: {}, error: '' }, action){
    switch(action.type){
        case 'CREATE_ORDER_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'CREATE_ORDER_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'CREATE_ORDER_FAIL':
            return {
                loading: false,
                data: {},
                error: action.payload
            }
        default: return state
    }
}

export function orderDetailsReducer(state= {}, action){
    switch(action.type){
        case 'GET_SHIPPING_DATA':
            return {
                ...state,
                shippingData: action.payload
            }
        case 'GET_PAYMENT_METHOD':
            return { 
                ...state,
                paymentMethod: action.payload 
            }
        case 'GET_TOTAL_PRICE':
            return { 
                ...state,
                totalPrice: action.payload 
            }
        default: return state
    }
}

export function getOrdersReducer(state= { loading: false, data:[], error: '' }, action){
    switch(action.type){
        case 'GET_ORDER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_ORDER_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'GET_ORDER_FAIL':
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export function getOrderDetailsReducer(state= { loading: false, data:{}, error: '' }, action){
    switch(action.type){
        case 'GET_ORDER_DETAILS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_ORDER_DETAILS_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'GET_ORDER_DETAILS_ERROR':
            return {
                loading: false,
                data: {},
                error: action.payload
            }
        default: return state
    }
}