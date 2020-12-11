import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../../redux/order/orderActions'

function OrdersLogic() {

    const getOrdersReducer = useSelector(state => state.getOrdersReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders())

    }, [dispatch])

    
    return { getOrdersReducer }
}

export default OrdersLogic
