import React from 'react'
import './styles.css'
import ShippingLogic from './ShippingLogic'


function Shipping(props) {
    
    const {
        shippingData, 
        setPaymentMethod, 
        handleInputs, 
        handleSubmit
    } = ShippingLogic(props)
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Shipping Information</h1>
                
                <label>Full name</label>
                <input type="text" name ="fullName" value={shippingData.fullName} onChange={handleInputs}/>

                <label>Address</label>
                <input type="text" name ="address" value={shippingData.address} onChange={handleInputs}/>
                
                <label>Contact no.</label>
                <input type="text" name ="contact" value={shippingData.contact} onChange={handleInputs}/>

                <h1>Payment Method</h1>
                <select onChange={e => setPaymentMethod(e.target.value)}>
                    <option value="Cash on delivery">Cash on delivery</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Debit Card" disabled>Debit Card</option>
                    <option value="Credit Card" disabled>Credit Card</option>
                </select>
                <button type="submit">Continue</button>
            </form>
            
        </div>
    )
}

export default Shipping
