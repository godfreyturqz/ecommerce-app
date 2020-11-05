//fetch all products
export function productListReducer(state= {
    loading: false,
    data: [],
    error: ''
}, action) {

    switch(action.type){
        case 'PRODUCT_LIST_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'PRODUCT_LIST_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            } 
        case 'PRODUCT_LIST_FAIL':
            return {
                loading: false,
                data: [],
                error: action.payload
            } 
        default: return state
    }
}

//create product
export function createProductReducer(state= { loading: false, data: {}, error: ''}, action) {
    switch(action.type){
        case 'CREATE_PRODUCT_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'CREATE_PRODUCT_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            } 
        case 'CREATE_PRODUCT_FAIL':
            return {
                loading: false,
                data: {},
                error: action.payload
            } 
        default: return state
    }
}

//product details
export function productDetailsReducer(state= { loading: false, data: {}, error: ''}, action){
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

