import React, {useEffect} from 'react'
import OrderRowCard from '../OrderRowCard'
import { useSelector, useDispatch } from 'react-redux'
import { getOrderDetails } from '../../../redux/order/orderActions'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function OrderDetails(props) {
    const getOrderDetailsReducer = useSelector(state => state.getOrderDetailsReducer)
    const dispatch = useDispatch()
    const {id: orderId} = useParams()
    const query = new URLSearchParams(props.location.search)

    useEffect(() => {
        dispatch(getOrderDetails(orderId))

        const data = {
            paymentId: query.get('paymentId'),
            PayerID: query.get('PayerID'),
            totalPrice: query.get('totalPrice'),
            orderId: orderId
        }
        if(data.paymentId && data.PayerID && data.totalPrice && data.orderId){
            axios.post('/api/payment/paypal/execute2', data)
        }

    }, [dispatch])
    

    return (
        <div>
           {JSON.stringify(getOrderDetailsReducer.data)}
        </div>
    )
}

export default OrderDetails
