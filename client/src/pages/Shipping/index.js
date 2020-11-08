import React, { useState } from 'react'
//styles
import './styles.css'
//redux
import { useDispatch } from "react-redux";
import { getShippingData } from '../../redux/cart/cartActions';
import { getPaymentMethod } from "../../redux/cart/cartActions";


function Shipping(props) {
    const userInfo = true
    if(!userInfo){
        props.history.push('/')
    }

    const [shippingData, setShippingData] = useState({
        fullName: 'Godfrey Turqueza',
        address: 'Mabalacat, Pampanga'
    })
    const [paymentMethod, setPaymentMethod] = useState('Paypal')

    const dispatch = useDispatch()

    function submitHandler(e){
        e.preventDefault()
        if(shippingData.fullName && shippingData.address){
            dispatch(getShippingData(shippingData))
            dispatch(getPaymentMethod(paymentMethod))
            props.history.push('/placeorder')
        }
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>Shipping Information</h1>
                
                <label>Full name</label>
                <input type="text" value={shippingData.fullName} onChange={e => setShippingData({...shippingData, fullName: e.target.value})} required/>

                <label>Address</label>
                <input type="text" value={shippingData.address} onChange={e => setShippingData({...shippingData, address: e.target.value})} required/>

                <h1>Payment Method</h1>
                <select onChange={e => setPaymentMethod(e.target.value)}>
                    <option value="Paypal">Paypal</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Credit Card">Credit Card</option>
                </select>
                <button type="submit">Continue</button>
            </form>
            
        </div>
    )
}

export default Shipping
