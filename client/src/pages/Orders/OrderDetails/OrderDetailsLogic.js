import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrderDetails } from '../../../redux/order/orderActions'


function OrderDetailsLogic(props) {

    const getOrderDetailsReducer = useSelector(state => state.getOrderDetailsReducer)
    const orderId = props.match.params.id
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getOrderDetails(orderId))

    }, [dispatch, orderId])


    return { getOrderDetailsReducer }
}

export default OrderDetailsLogic
