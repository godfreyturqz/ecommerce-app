import React from 'react'
import './styles.css'
import OrderDetailsLogic from './OrderDetailsLogic'
//components
import OrderRowCard from '../OrderRowCard'
import Loading from '../../../components/Loading'


function OrderDetails(props) {

    const { getOrderDetailsReducer } = OrderDetailsLogic(props)

    return (
        getOrderDetailsReducer.loading ? <Loading /> :
        getOrderDetailsReducer.error ? <div>{getOrderDetailsReducer.error}</div> :
        getOrderDetailsReducer.data === undefined ? <div>Data undefined</div> :
        getOrderDetailsReducer.data.length === 0 ? <div>There are no orders</div> :
        <div className="order-details-container">
            <OrderRowCard {...getOrderDetailsReducer.data} />
        </div>
    )
}

export default OrderDetails
