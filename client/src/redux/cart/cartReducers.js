export function cartReducer(state= { loading: false, data: [], error: '' }, action){
    switch(action.type){
        case 'ADD_TO_CART_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'ADD_TO_CART_SUCCESS':
            // const item = action.payload
            // const product = state.data.find(item => item.productId === item.productId)
            return {
                loading: false,
                data: [...state.data, action.payload],
                error: ''
            }
        case 'ADD_TO_CART_FAIL':
            return {
                loading: false,
                data: [...state.data],
                error: action.payload
            }
        case 'REMOVE_FROM_CART':
            return { 
                loading: false,
                data: state.data.filter(item => item.productId !== action.payload),
                error: ''
            }
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
        case 'CART_EMPTY':
            return {
                ...state,
                data: []
            }
        default: return state
    }
}