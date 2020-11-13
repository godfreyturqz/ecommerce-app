import axios from "axios"

//create action
export const createProduct = (productData) => async (dispatch) => {
    dispatch({type: 'CREATE_PRODUCT_REQUEST'})
    try {
        const data = await axios.post('/api/products/', productData)
        dispatch({type: 'CREATE_PRODUCT_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'CREATE_PRODUCT_FAIL', payload: error.message})
    }
}

//getProductList action
export const getProductList = () => async (dispatch) => {
    dispatch({type: 'PRODUCT_LIST_REQUEST'})
    try {
        const {data} = await axios.get('/api/products/')
        dispatch({type: 'PRODUCT_LIST_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'PRODUCT_LIST_FAIL', payload: error.message})
    }
}

//getProductDetails action
export const getProductDetails = (paramsId) => async (dispatch) => {
    dispatch({type: 'PRODUCT_DETAILS_REQUEST'})
    try {
        const {data} = await axios.get(`/api/products/${paramsId}`)
        dispatch({type: 'PRODUCT_DETAILS_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'PRODUCT_DETAILS_FAIL', payload: error.message})
    }
}

//update action
export const updateProduct = (productId, updatedData) => async (dispatch) => {
    dispatch({type: 'UPDATE_PRODUCT_REQUEST'})
    try {
        const data = await axios.put(`/api/products/${productId}`, updatedData)
        dispatch({type: 'UPDATE_PRODUCT_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'UPDATE_PRODUCT_FAIL', payload: error.message})
    }
}

//delete action
export const deleteProduct = (productId) => async (dispatch) => {
    dispatch({type: 'DELETE_PRODUCT_REQUEST'})
    try {
        const {data} = await axios.delete(`/api/products/${productId}`)
        dispatch({type: 'DELETE_PRODUCT_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'DELETE_PRODUCT_FAIL', payload: error.message})
    }
}



