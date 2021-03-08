import { ApiRequest } from '../../services/ApiRequest'
import { LocalStorage } from '../../services/localStorage'

const currentState = new LocalStorage().loadState()

export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({type: 'CREATE_PRODUCT_REQUEST'})
        const data = await new ApiRequest('POST', '', productData).products()
        dispatch({type: 'CREATE_PRODUCT_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'CREATE_PRODUCT_FAIL', payload: error.message})
    }
}

export const getProducts = () => async (dispatch) => {

    dispatch({type: 'GET_PRODUCTS_REQUEST'})

    try {
        if(currentState.getProductsReducer.data.length > 0){
            dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: currentState.getProductsReducer.data})
        } else {
            const { data } = await new ApiRequest('GET').products()
            dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: data})
        }
    }
    catch (error) {
        dispatch({type: 'GET_PRODUCTS_FAIL', payload: error.message})
    }
}

export const getProductDetails = (productId) => async (dispatch) => {

    dispatch({type: 'GET_PRODUCT_DETAILS_REQUEST'})

    try {
        if(currentState.getProductsReducer.data.length > 0){
            const data = currentState.getProductsReducer.data.find(product => product._id === productId)
            dispatch({type: 'GET_PRODUCT_DETAILS_SUCCESS', payload: data})
        } else {
            const { data } = await new ApiRequest('GET', productId).products()
            dispatch({type: 'GET_PRODUCT_DETAILS_SUCCESS', payload: data})
        }
        
    }
    catch (error) {
        dispatch({type: 'GET_PRODUCT_DETAILS_FAIL', payload: error.message})
    }
}

export const updateProduct = (productId, updatedData) => async (dispatch) => {
    try {
        dispatch({type: 'UPDATE_PRODUCT_REQUEST'})
        const data = await new ApiRequest('PUT', productId, updatedData).products()
        dispatch({type: 'UPDATE_PRODUCT_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'UPDATE_PRODUCT_FAIL', payload: error.message})
    }
}

export const deleteProduct = (productId) => async (dispatch) => {
    try {
        dispatch({type: 'DELETE_PRODUCT_REQUEST'})
        const data = await new ApiRequest('DELETE', productId).products()
        dispatch({type: 'DELETE_PRODUCT_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'DELETE_PRODUCT_FAIL', payload: error.message})
    }
}