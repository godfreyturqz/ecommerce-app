import { userAuth } from "../../redux/auth/authActions"
import { createOrder } from "../../redux/order/orderActions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

function PlaceOrderLogic(props) {
    
    const cartReducer = useSelector(state => state.cartReducer)
    const orderDetailsReducer = useSelector(state => state.orderDetailsReducer)
    const authReducer = useSelector(state => state.authReducer)

    const dispatch = useDispatch()

    const handlePlaceOrder = (e) => {
        e.preventDefault()
        // format of object should be the same with OrderModel in the backend
        dispatch(userAuth())
        if(authReducer.userId){
            dispatch(createOrder({
                userId: authReducer.userId,
                orderItems: cartReducer.data,
                shippingData: orderDetailsReducer.shippingData,
                totalPrice: orderDetailsReducer.totalPrice,
                paymentMethod: orderDetailsReducer.paymentMethod
            }))
            props.history.push('/orderStatus?placeorder=success')
        } else {
            props.history.push('/signin')
        }
    }


    return { 
        cartReducer, 
        orderDetailsReducer, 
        handlePlaceOrder 
    }
}

export default PlaceOrderLogic
