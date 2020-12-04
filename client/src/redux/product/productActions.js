import axios from "axios"


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

export const getProducts = () => async (dispatch) => {
    dispatch({type: 'GET_PRODUCTS_REQUEST'})
    try {
        const getProducts = JSON.parse(localStorage.getItem('getProducts'))
        if (!getProducts) {
            const {data} = await axios.get('/api/products/')
            localStorage.setItem("getProducts", JSON.stringify(data)) 
        }
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: getProducts})
    }
    catch (error) {
        dispatch({type: 'GET_PRODUCTS_FAIL', payload: error.message})
    }
}

export const getProductDetails = (paramsId) => async (dispatch) => {
    dispatch({type: 'GET_PRODUCT_DETAILS_REQUEST'})
    try {
        const productDetails = JSON.parse(localStorage.getItem("getProducts")).find(product => product._id === paramsId)
        // const {data} = await axios.get(`/api/products/${paramsId}`)
        dispatch({type: 'GET_PRODUCT_DETAILS_SUCCESS', payload: productDetails})
    }
    catch (error) {
        dispatch({type: 'GET_PRODUCT_DETAILS_FAIL', payload: error.message})
    }
}

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