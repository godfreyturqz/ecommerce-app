import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../../redux/order/orderActions'
import OrderRow from "../../components/CardC";


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
                    <OrderRow
                    key={item._id}
                    orderId={item._id}
                    shippingData={item.shippingData}
                    paymentStatus={item.paymentStatus}
                    deliveryStatus={item.deliveryStatus}
                    orderItems={item.orderItems}
                    totalPrice={item.totalPrice}
                    paymentMethod={item.paymentMethod}
                    />
                )
            }
        </div>
    )
}

export default OrderStatus

