import React from 'react'
import './styles.css'
import OrdersLogic from './OrdersLogic'
//components
import OrderRowCard from "./OrderRowCard"
import Loading from '../../components/Loading'


function Orders() {

    const { getOrdersReducer } = OrdersLogic()
    
    return (
        getOrdersReducer.loading ? <Loading /> :
        getOrdersReducer.error ? <div>{getOrdersReducer.error}</div> :
        getOrdersReducer.data.length === 0 ? <div>There are no orders</div> :
        <div className="order-status-container">
            { getOrdersReducer.data.map(item => <OrderRowCard key={item._id} {...item} />) }
        </div>
    )
}

export default Orders
