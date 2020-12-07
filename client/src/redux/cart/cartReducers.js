export function cartReducer(state= { loading: false, data: [], error: '' }, action){
    switch(action.type){
        case 'ADD_TO_CART_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'ADD_TO_CART_SUCCESS':
            const product = state.data.find(item => item.productId === action.payload.productId)
            if(product){
                return {
                    loading: false,
                    data: state.data.map(item => item.productId === product.productId ? {...item, quantity: item.quantity + action.payload.quantity} : item),
                    error: ''
                }
            }
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
                ...state,
                data: state.data.filter(item => item.productId !== action.payload),
            }
        case 'CART_EMPTY':
            return {
                ...state,
                data: []
            }
        default: return state
    }
}