// export function cartReducer(state= {cartItems: []}, action){
export function cartReducer(state= { loading: false, data: [], error: '' }, action){
    switch(action.type){
        case 'ADD_TO_CART_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'ADD_TO_CART_SUCCESS':
            // const item = action.payload
            // const product = state.cartItems.find(x => x.product === item.product)
            // if(product){
            //     return {cartItems: state.cartItems.map(x => x.product === product.product ? item : x)}
            // }else{
                
            // }
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
        default: return state
    }
}