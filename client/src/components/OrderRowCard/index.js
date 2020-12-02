import React from 'react'
import './styles.css'

function OrderRowCard(props) {
    return (
        <div className="OrderRowCard">
            <div className="OrderRowCard-header">
                <h5>Shipping details</h5>
                <br/>
                <p>{props.shippingData.fullName}</p>
                <p>{props.shippingData.contact}</p>
                <p>{props.shippingData.address}</p>
            </div>
            <div className="OrderRowCard-body">
                <h5>Orders</h5>
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
        </div>
    )
}

export default OrderRowCard