import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../../redux/order/orderActions'
import OrderRowCard from "./OrderRowCard";
import './styles.css'


function Orders() {
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
                        isPaid={item.isPaid}
                        isDelivered={item.isDelivered}
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

export default Orders
