import React from 'react'
import './styles.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function OrderRowCard(props) {
    
    const handlePayment = async () => {
        const orderItems = props.orderItems.map(item => {
            return {
                name: item.name,
                price: String(item.price),
                quantity: String(item.quantity),
                sku: "item",
                currency: "USD"
            }
        })
        const totalPrice = String(props.totalPrice)
        const orderId = String(props.orderId)

        const {data} = await axios.post('/api/payment/paypal/create', {orderItems, totalPrice, orderId})
        window.location.assign(data.approval_url)
    }
    

    return (
        <div className="OrderRowCard">
            <div className="OrderRowCard-header">
                <h5>Shipping details</h5>
                <br/>
                <p>{props.shippingData.fullName}</p>
                <p>+63 {props.shippingData.contact}</p>
                <p>{props.shippingData.address}</p>
            </div>
            <div className="OrderRowCard-body">
                <h5>Orders</h5>
                <br/>
                <p>Date: {new Date().toUTCString(props.orderDate)}</p>
                {
                    props.orderItems.map(item => 
                        <div className="orderItems-container" key={item._id}>
                            <div className="imgWrapper">
                                <Link to={`/order/details/${props.orderId}`}>
                                    <img src={item.image} alt="product"/>
                                </Link>
                            </div>
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.mainCategory} - {item.subCategory}</p>
                                <p>$ {item.price} x {item.quantity}</p>
                            </div>
                        </div>
                        )
                }
                <br/>
                <h5>Payment</h5>
                <br/>
                <p>Total Price: $ {props.totalPrice}</p>
                <p>Method: {props.paymentMethod}</p>
                <p>Status: {props.isPaid ? 'Paid' : 'Not yet paid'}</p>
                <p>Delivery Status: {props.isDelivered? 'Done' : 'Processing'}</p>
                <br/>
                <button onClick={handlePayment}>or Pay thru Paypal</button>
            </div>
            
        </div>
    )
}

export default OrderRowCard