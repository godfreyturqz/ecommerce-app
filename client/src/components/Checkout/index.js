import React from 'react'
//styles
import './styles.css'

function Checkout(props) {
    return (
        <div>
            <div className={props.step1 ? 'active' : ''}>Sign-in</div>
            <div>Shipping</div>
            <div>Payment</div>
            <div>Place Order</div>
        </div>
    )
}

export default Checkout
