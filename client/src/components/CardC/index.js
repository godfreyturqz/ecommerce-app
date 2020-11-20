import React from 'react'
import './styles.css'

function CardC(props) {
    return (
        <div class="CardC">
            <div class="CardC-header">Order ID: {props.orderId}</div>
            <div class="CardC-body">
                <p>Customer: {props.shippingData.fullName}</p>
                <p>Shipping Address: {props.shippingData.address}</p>
                <br/>
                <p>List of Orders:</p>
                <br/>
                {
                    props.orderItems.map(item => 
                        <div>
                            <p>Product ID: {item.productId}</p>
                            <p>Name: {item.name}</p>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Subt-Total: $ {item.price * item.quantity}</p>
                            <br/>
                        </div>
                        )
                }
                <br/>
                <p>Total Price: $ {props.totalPrice}</p>
                <p>Payment Method: {props.paymentMethod}</p>
                <p>Payment Status: {props.paymentStatus}</p>
                <p>Delivery Status: {props.deliveryStatus}</p>
            </div>
        </div>
    )
}

export default CardC