import { httpReqProducts } from '../../services/httpRequests'
import { checkLocalStorageExpiration } from '../../services/localStorage'


export const createProduct = (productData) => async (dispatch) => {
    dispatch({type: 'CREATE_PRODUCT_REQUEST'})
    try {
        const data = await httpReqProducts('POST', '', productData)
        dispatch({type: 'CREATE_PRODUCT_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'CREATE_PRODUCT_FAIL', payload: error.message})
    }
}

export const getProducts = () => async (dispatch) => {
    dispatch({type: 'GET_PRODUCTS_REQUEST'})
    try {
        const data = checkLocalStorageExpiration('fetchedProductList')
        if (!data) {
            const {data} = await httpReqProducts('GET')
            localStorage.setItem("fetchedProductList", JSON.stringify({
                    value: data, 
                    maxAge : new Date().getTime() + 86400000
                })
            )
        }
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'GET_PRODUCTS_FAIL', payload: error.message})
    }
}

export const getProductDetails = (paramsId) => async (dispatch) => {
    dispatch({type: 'GET_PRODUCT_DETAILS_REQUEST'})
    try {
        const data = JSON.parse(localStorage.getItem("fetchedProductList")).value.find(product => product._id === paramsId)
        // const {data} = await httpReqProducts('GET', paramsId)
        dispatch({type: 'GET_PRODUCT_DETAILS_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'GET_PRODUCT_DETAILS_FAIL', payload: error.message})
    }
}

export const updateProduct = (productId, updatedData) => async (dispatch) => {
    dispatch({type: 'UPDATE_PRODUCT_REQUEST'})
    try {
        const data = await httpReqProducts('PUT', productId, updatedData)
        dispatch({type: 'UPDATE_PRODUCT_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'UPDATE_PRODUCT_FAIL', payload: error.message})
    }
}

export const deleteProduct = (productId) => async (dispatch) => {
    dispatch({type: 'DELETE_PRODUCT_REQUEST'})
    try {
        const data = await httpReqProducts('DELETE', productId)
        dispatch({type: 'DELETE_PRODUCT_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'DELETE_PRODUCT_FAIL', payload: error.message})
    }
}