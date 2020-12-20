import { ApiRequest } from '../../services/ApiRequest'
import { LocalStorage } from '../../services/localStorage'


export const createProduct = (productData) => async (dispatch) => {
    dispatch({type: 'CREATE_PRODUCT_REQUEST'})
    try {
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
        const data = new LocalStorage().isStorageExpired('products')
        if (data === null) {
            const {data} = await new ApiRequest('GET').products()
            new LocalStorage().setProductStorage(data)
            dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: data})
        } else {
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
        const data = new LocalStorage().getProductStorage(productId)
        if (data === null) {
            const {data} = await new ApiRequest('GET', productId).products()
            dispatch({type: 'GET_PRODUCT_DETAILS_SUCCESS', payload: data})
        } else {
            dispatch({type: 'GET_PRODUCT_DETAILS_SUCCESS', payload: data})
        }
    }
    catch (error) {
        dispatch({type: 'GET_PRODUCT_DETAILS_FAIL', payload: error.message})
    }
}

export const updateProduct = (productId, updatedData) => async (dispatch) => {
    dispatch({type: 'UPDATE_PRODUCT_REQUEST'})
    try {
        const data = await new ApiRequest('PUT', productId, updatedData).products()
        dispatch({type: 'UPDATE_PRODUCT_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'UPDATE_PRODUCT_FAIL', payload: error.message})
    }
}

export const deleteProduct = (productId) => async (dispatch) => {
    dispatch({type: 'DELETE_PRODUCT_REQUEST'})
    try {
        const data = await new ApiRequest('DELETE', productId).products()
        dispatch({type: 'DELETE_PRODUCT_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'DELETE_PRODUCT_FAIL', payload: error.message})
    }
}