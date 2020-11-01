const initialState= {
    loading: false,
    products: [],
    error: ''
}

export function productListReducer(state= initialState, action){
    switch(action.type){
        case 'PRODUCT_LIST_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'PRODUCT_LIST_SUCCESS':
            return {
                loading: false,
                products: action.payload,
                error: ''
            } 
        case 'PRODUCT_LIST_FAIL':
            return {
                loading: false,
                products: [],
                error: action.payload
            } 
        default: return state
    }
}
