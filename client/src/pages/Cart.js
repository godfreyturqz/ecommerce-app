import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../redux/cartActions'
import './../App.css'
import { Link } from "react-router-dom";

function Cart(props) {
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const productId = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1
    const dispatch = useDispatch()
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }

    }, [dispatch, productId, qty])
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId))
    }
    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping")
    }
    
    return (
        <div>
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>Shopping Cart</h3>
                        <div>Price</div>
                    </li>
                    {
                        cartItems.lenght === 0
                        ? <div>Cart is empty</div>
                        : cartItems.map(item=> 
                            <div>
                                <img className="cart-image" src={item.image} alt="bike"/>
                                <div className="cart-name">
                                    <div>
                                        <Link to={"/product/" + item.product}>
                                            {item.name}
                                        </Link>
                                    </div>
                                    <div>
                                        Qty:
                                        <select value={item.qty} onChange={(e)=> dispatch(addToCart(item.product, e.target.value))}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <button onClick={()=> removeFromCartHandler(item.product)}>Delete</button>
                                    </div>
                                    <div>
                                        {item.price}
                                    </div>
                                </div>
                            </div>
                            )
                    }
                </ul>
            </div>
            <div className="cart-action">
                <h3>
                    Subtotal ({cartItems.reduce((a,c) => a + c.qty, 0)} items)
                    :
                    $ {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
                </h3>
                <button onClick={checkoutHandler} className="button primary" disabled={cartItems.length === 0}>
                    Proceed to checkout
                </button>
                    
            </div>
        </div>
    )
}

export default Cart
