//create reducer
export function createProductReducer(state= { loading: false, data: {}, error: '' }, action) {
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

//getProductList reducer
export function getProductsReducer(state= { loading: false, data: [], error: '' }, action) {
    switch(action.type){
        case 'GET_PRODUCTS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_PRODUCTS_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            } 
        case 'GET_PRODUCTS_FAIL':
            return {
                loading: false,
                data: [],
                error: action.payload
            } 
        default: return state
    }
}

//getProductDetails reducer
export function getProductDetailsReducer(state= { loading: false, data: {}, error: '' }, action){
    switch(action.type){
        case 'GET_PRODUCT_DETAILS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_PRODUCT_DETAILS_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            } 
        case 'GET_PRODUCT_DETAILS_FAIL':
            return {
                loading: false,
                data: {},
                error: action.payload
            } 
        default: return state
    }
}

//update reducer
export function updateProductReducer(state= { loading: false, data: {}, error: '' }, action){
    switch(action.type){
        case 'UPDATE_PRODUCT_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_PRODUCT_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'UPDATE_PRODUCT_FAIL':
            return {
                loading: false,
                data: {},
                error: action.payload
            } 
        default: return state
    }
}

//delete reducer
export function deleteProductReducer(state= { loading: false, data: {}, error: '' }, action){
    switch(action.type){
        case 'DELETE_PRODUCT_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_PRODUCT_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'DELETE_PRODUCT_FAIL':
            return {
                loading: false,
                data: {},
                error: action.payload
            } 
        default: return state
    }
}


