import React from 'react'
import './styles.css'
import axios from 'axios'

function OrderRowCard(props) {

    const handlePayment = async () => {
        const {data} = await axios.post('/api/payment/paypal')
        console.log(data)
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
                                <img src={item.image} alt="product"/>
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
                <p>Status: {props.paymentStatus}</p>
                <p>Delivery Status: {props.deliveryStatus}</p>
            </div>
            <button onClick={handlePayment}>Pay thru Paypal</button>
        </div>
    )
}

export default OrderRowCard