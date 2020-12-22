export const cartReducer = (state = { data: [] }, action) => {
    switch(action.type){
        case 'ADD_TO_CART_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'ADD_TO_CART_SUCCESS':
            const product = state.data.find(item => item._id === action.payload._id)
            if(product){
                return {
                    ...state,
                    loading: false,
                    data: state.data.map(item => item._id === product._id ? {...item, quantity: item.quantity + action.payload.quantity} : item),
                }
            }
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload]
            }
        case 'ADD_TO_CART_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'REMOVE_FROM_CART':
            return { 
                ...state,
                data: state.data.filter(item => item._id !== action.payload),
            }
        case 'CART_EMPTY':
            return {
                ...state,
                data: []
            }
        default: return state
    }
}
