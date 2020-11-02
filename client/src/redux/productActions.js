import axios from "axios"
//
// function productListRequest(){
//     return {
//         type: 'PRODUCT_LIST_REQUEST'
//     }
// }
// function productListSuccess(data){
//     return {
//         type: 'PRODUCT_LIST_SUCCESS',
//         payload: data
//     }
// }
// function productListFail(error){
//     return {
//         type: 'PRODUCT_LIST_FAIL',
//         payload:error
//     }
// }
export function getProductList(){
    return async function(dispatch){
        try {
            dispatch({type: 'PRODUCT_LIST_REQUEST'})
            const {data} = await axios.get('/api/products')
            dispatch({type: 'PRODUCT_LIST_SUCCESS', payload: data})
        } catch (error) {
            console.log(error)
            dispatch({type: 'PRODUCT_LIST_FAIL', payload: error})
        }
        // axios.get('/api/products')
        // .then(res =>{
        //     dispatch(productListSuccess(res.data))
        // })
        // .catch(error => {
        //     dispatch(productListFail(error.message))
        // })
    }
}

//details
function productDetailsRequest(productId){
    return {
        type: 'PRODUCT_DETAILS_REQUEST',
        payload: productId
    }
}
function productDetailsSuccess(data){
    return {
        type: 'PRODUCT_DETAILS_SUCCESS',
        payload: data
    }
}
function productDetailsFail(error){
    return {
        type: 'PRODUCT_DETAILS_FAIL',
        payload: error
    }
}
export function getProductDetails(productId){
    return function(dispatch){
        dispatch(productDetailsRequest())
        axios.get('/api/products/' + productId)
        .then(res =>{
            dispatch(productDetailsSuccess(res.data))
        })
        .catch(error => {
            dispatch(productDetailsFail(error.message))
        })
    }
}
