import React from 'react'
import './styles.css'
import PlaceOrderLogic from './PlaceOrderLogic'


function PlaceOrder(props) {

    const { 
        cartReducer, 
        orderDetailsReducer, 
        handlePlaceOrder 
    } = PlaceOrderLogic(props)

    return (
        <>
            <div className="order-header">
                <h1>Shipping Information</h1>
                <p>Name: {orderDetailsReducer.shippingData.fullName}</p>
                <p>Contact: {orderDetailsReducer.shippingData.contact}</p>
                <p>Address: {orderDetailsReducer.shippingData.address}</p>
                <h1>Payment</h1>
                <p>Method: {orderDetailsReducer.paymentMethod}</p>
            </div>
            {   
                cartReducer?.data?.length === 0
                ? <div className="cart-empty">Cart is empty</div> 
                : cartReducer.data.map( item => 
                    <div className="cart-container" key={item._id}>
                        <div className="cart-grid">
                            <div className="cart-image">
                                <img src={item.image} alt="bike" loading="lazy"/>
                            </div>
                            <div className="cart-data">
                                <p className="cart-data-name">{item.name}</p>
                                <p>Category: {item.mainCategory} - {item.subCategory}</p>
                                <p>Brand: {item.brand}</p>
                            </div>
                            <div className="cart-price">
                                <p><span>Qty: </span>{item.quantity}</p>
                                <p><span>Price: </span>$ {item.price}</p>
                                <p><span>Subtotal: </span>$ {item.quantity * item.price}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            {   
                cartReducer?.data?.length !== 0 && 
                <div className="cart-checkout">
                    <p><span>Total: </span>$ {orderDetailsReducer.totalPrice}</p>
                    <button onClick={handlePlaceOrder}>Place Order</button>
                </div>
            }
        </>
    )
}

export default PlaceOrder
