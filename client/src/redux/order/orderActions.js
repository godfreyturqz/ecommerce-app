import axios from "axios";

//action creator
export const createOrder = (order) => async (dispatch) => {
    dispatch({type: 'CREATE_ORDER_REQUEST'})
    try {
        const data = await axios.post(`/api/orders`, order)
        console.log(data)
        dispatch({type: 'CREATE_ORDER_SUCCESS', payload: data})
        dispatch({type: 'CART_EMPTY'})
    }
    catch (error) {
        dispatch({type: 'CREATE_ORDER_FAIL', payload: error})
    }
}






