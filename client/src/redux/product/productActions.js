import axios from "axios"

//getProductList
export const getProductList = () => async (dispatch) => {

    dispatch({type: 'PRODUCT_LIST_REQUEST'})

    try {
        const data = await axios.get('/api/products/')
        dispatch({type: 'PRODUCT_LIST_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({type: 'PRODUCT_LIST_FAIL', payload: error})
    }
}

//getProductDetails
// export function getProductDetails(productId){

//     dispatch({type: 'PRODUCT_DETAILS_REQUEST', payload: productId})

//     return async function(dispatch){

//         try {
//             const {data} = await axios.get('/api/products/' + productId)
//             dispatch({type: 'PRODUCT_DETAILS_SUCCESS', payload: data})
//         } catch (error) {
//             dispatch({type: 'PRODUCT_DETAILS_FAIL', payload: error})
//         }

//     }
// }

//createProduct
// export function createProduct(newProduct){
//     return async function(dispatch){
//         try {
//             const {data} = await axios.post('/api/products/', newProduct)
//             dispatch({type: 'CREATE_PRODUCT', payload: data})
//         } catch (error) {
//             console.log(error)
//         }

//     }
// }