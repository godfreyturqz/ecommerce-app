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

export function createProductReducer(state= [], action){
    switch(action.type){
        case 'CREATE_PRODUCT':
            return [...state, action.payload]
        default: return state
    }
}