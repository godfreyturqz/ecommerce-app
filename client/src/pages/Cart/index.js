//react
import React, { useEffect } from 'react'
//styles
import './styles.css'
//components
import Loading from "../../components/Loading";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../../redux/cart/cartActions'

function Cart(props) {
    const { loading, data, error } = useSelector(state => state.cartReducer)
    
    const dispatch = useDispatch()

    const productId = props.match.params.id
    const quantity = props.location.search ? Number(props.location.search.split("=")[1]) : 1

    useEffect(() => {

        if(productId) dispatch(addToCart(productId, quantity))

    }, [dispatch, productId, quantity])
        
    const removeFromCartHandler = productId => dispatch(removeFromCart(productId))
    const checkoutHandler = () => props.history.push("/shipping")
    
    return (
        loading ? <Loading />
        : error ? <div>{error}</div>
        :
        <div >
            <div className="header-container">
                <div className="header-wrapper">
                    <h2>Shopping Cart</h2>
                </div>
            </div>
            {   
                data.length === 0
                ? <div className="cart-empty">Cart is empty</div> 
                : data.map( item=> 
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
                            <button onClick={()=> removeFromCartHandler(item.productId)}>Delete</button>
                        </div>
                    </div>
                )
            }
            {   
                data.length !== 0 && 
                <div className="cart-checkout">
                    <p><span>Total: </span>$ {data.map(item => item.price * item.quantity).reduce((prev, next) => prev + next, 0)}</p>
                    <button onClick={checkoutHandler}>Proceed to checkout</button>
                </div>
            }
        </div>
    )
}

export default Cart
