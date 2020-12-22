import React from 'react'
import './styles.css'
import CartLogic from './CartLogic'
//components
import Loading from "../../components/Loading"


const Cart = (props) => {

    const { 
        cartReducer,
        totalPrice,
        handleRemoveFromCart,
        handleCheckout
    } = CartLogic(props)

    
    return (
        cartReducer.loading ? <Loading /> :
        cartReducer.error ? <div>{cartReducer.error}</div> :
        cartReducer.data &&
        <>
            <div className="header-container">
                <div className="header-wrapper">
                    <h2>Shopping Cart</h2>
                </div>
            </div>
            {   
                cartReducer.data.length === 0
                ? <div className="cart-empty">Cart is empty</div> 
                : cartReducer.data.map( item => 
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
                        <div className="button-wrapper">
                            <button onClick={()=> handleRemoveFromCart(item._id)}>Delete</button>
                        </div>
                    </div>
                )
            }
            {   
                cartReducer.data.length !== 0 && 
                <div className="cart-checkout">
                    <p><span>Total: </span>$ {totalPrice}</p>
                    <button onClick={handleCheckout}>Proceed to checkout</button>
                </div>
            }
        </>
    )
}

export default Cart
