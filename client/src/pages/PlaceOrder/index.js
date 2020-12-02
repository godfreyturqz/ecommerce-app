import React from 'react'
//styles
import './styles.css'
//redux
import { userAuth } from "../../redux/auth/authActions";
import { createOrder } from "../../redux/order/orderActions";
import { useDispatch, useSelector } from "react-redux";


function PlaceOrder(props) {
    const cart = useSelector(state => state.cartReducer)
    const authReducer = useSelector(state => state.authReducer)

    const totalPrice = cart.data.map(item => item.price * item.quantity).reduce((prev, next) => prev + next, 0)

    const dispatch = useDispatch()

    function placeOrderHandler(e){
        e.preventDefault()
        // format of object should be the same with OrderModel in the backend
        dispatch(userAuth())
        if(authReducer.userId){
            dispatch(createOrder({
                userId: authReducer.userId,
                orderItems: cart.data,
                shippingData: cart.shippingData,
                totalPrice: totalPrice,
                paymentMethod: cart.paymentMethod
            }))
            props.history.push('/orderStatus?placeorder=success')
        }
        else{
            props.history.push('/signin')
        }
        
        
    }
    
    return (
        <div>
            <div className="order-header">
                <h1>Shipping Information</h1>
                <p>Name: {cart.shippingData.fullName}</p>
                <p>Address: {cart.shippingData.address}</p>
                <h1>Payment</h1>
                <p>Method: {cart.paymentMethod}</p>
            </div>
            {   
                cart.data.length === 0
                ? <div className="cart-empty">Cart is empty</div> 
                : cart.data.map( item => 
                    <div className="cart-container" key={item._id}>
                        <div className="cart-grid">
                            <div className="cart-image">
                                <img src={item.image} alt="bike"/>
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
                cart.data.length !== 0 && 
                <div className="cart-checkout">
                    <p><span>Total: </span>$ {totalPrice}</p>
                    <button onClick={placeOrderHandler}>Place Order</button>
                </div>
            }
        </div>
    )
}

export default PlaceOrder
