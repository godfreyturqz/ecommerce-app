const productListState= {
    loading: false,
    products: [],
    error: ''
}
export function productListReducer(state= productListState, action){
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

const productDetailsState= {
    loading: false,
    data: {},
    error: ''
}
export function productDetailsReducer(state= productDetailsState, action){
    switch(action.type){
        case 'PRODUCT_DETAILS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'PRODUCT_DETAILS_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            } 
        case 'PRODUCT_DETAILS_FAIL':
            return {
                loading: false,
                data: {},
                error: action.payload
            } 
        default: return state
    }
}