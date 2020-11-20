import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../../redux/order/orderActions'


function OrderStatus() {
    const getOrdersReducer = useSelector(state => state.getOrdersReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders())

    }, [dispatch])
    
    return (
        getOrdersReducer.data.length === 0 ? <div>There are no orders</div>
        :
        <div>
            {
                getOrdersReducer.data.map( item => 
                    item.orderItems.map( item =>
                        <div>
                            <p>{item.productId}</p>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <br/>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default OrderStatus

