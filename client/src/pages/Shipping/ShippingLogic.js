import { useState } from 'react'
import { useDispatch } from "react-redux";
import { getShippingData, getPaymentMethod } from '../../redux/cart/cartActions';


function ShippingLogic(props) {
    const [shippingData, setShippingData] = useState({
        fullName: 'Godfrey Turqueza',
        address: 'Mabalacat, Pampanga',
        contact: '09123456789',
    })
    const [paymentMethod, setPaymentMethod] = useState('Cash on delivery')
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(shippingData.fullName && shippingData.address && shippingData.contact){
            dispatch(getShippingData(shippingData))
            dispatch(getPaymentMethod(paymentMethod))
            props.history.push('/placeorder')
        }
    }
    
    const handleInputs = (e) => {
        setShippingData({
            ...shippingData,
            [e.target.name]: e.target.value
        })
    }

    return {shippingData, setPaymentMethod, handleInputs, handleSubmit}
}

export default ShippingLogic

