import { useState } from 'react'
import { useDispatch } from "react-redux";
import { getShippingData, getPaymentMethod } from '../../redux/order/orderActions';


function ShippingLogic(props) {
    const [shippingData, setShippingData] = useState({
        fullName: 'Godfrey Turqueza',
        address: 'Mabalacat, Pampanga',
        contact: '09123456789',
    })
    const [paymentMethod, setPaymentMethod] = useState('Cash on delivery')
    const dispatch = useDispatch()

    
    const handleInputs = (e) => {
        setShippingData({
            ...shippingData,
            [e.target.name]: e.target.value
        })
    }
    const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(shippingData.fullName && shippingData.address && shippingData.contact){
            dispatch(getShippingData(shippingData))
            dispatch(getPaymentMethod(paymentMethod))
            props.history.push('/placeorder')
        }
    }


    return {
        shippingData, 
        handleInputs, 
        handlePaymentMethod, 
        handleSubmit
    }
}

export default ShippingLogic
