import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../../redux/order/orderActions'
import OrderRowCard from "../../components/OrderRowCard";
import './styles.css'


function OrderStatus() {
    const getOrdersReducer = useSelector(state => state.getOrdersReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders())

    }, [dispatch])
    
    return (
        getOrdersReducer.data.length === 0 ? <div>There are no orders</div>
        :
        <div className="order-status-container">
            {
                getOrdersReducer.data.map( item =>
                    <OrderRowCard
                    key={item._id}
                    orderId={item._id}
                    paymentStatus={item.paymentStatus}
                    deliveryStatus={item.deliveryStatus}
                    userId={item.userId}
                    orderItems={item.orderItems}
                    shippingData={item.shippingData}
                    totalPrice={item.totalPrice}
                    paymentMethod={item.paymentMethod}
                    orderDate={item.orderDate}
                    />
                )
            }
        </div>
    )
}

export default OrderStatus

