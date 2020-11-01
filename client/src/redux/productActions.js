import axios from "axios"

function productListRequest(){
    return {
        type: 'PRODUCT_LIST_REQUEST'
    }
}
function productListSuccess(data){
    return {
        type: 'PRODUCT_LIST_SUCCESS',
        payload: data
    }
}
function productListFail(error){
    return {
        type: 'PRODUCT_LIST_FAIL',
        payload:error
    }
}

export function listProducts(){
    return function(dispatch){
        dispatch(productListRequest())
        axios.get('/api/products')
        .then(res =>{
            dispatch(productListSuccess(res.data))
        })
        .catch(error => {
            dispatch(productListFail(error.message))
        })
    }
}
