import { isAuth } from "../../redux/auth/authActions"
import { createOrder } from "../../redux/order/orderActions"
import { useDispatch, useSelector } from "react-redux"


function PlaceOrderLogic(props) {
    
    const authReducer = useSelector(state => state.authReducer)
    const cartReducer = useSelector(state => state.cartReducer)
    const orderDetailsReducer = useSelector(state => state.orderDetailsReducer)

    const dispatch = useDispatch()

    const handlePlaceOrder = (e) => {
        e.preventDefault()
        
        dispatch(isAuth())

        if(authReducer.userId){

            // format of object should be the same with OrderModel in the backend
            dispatch(createOrder({
                userId: authReducer.userId,
                orderItems: cartReducer.data,
                shippingData: orderDetailsReducer.shippingData,
                totalPrice: orderDetailsReducer.totalPrice,
                paymentMethod: orderDetailsReducer.paymentMethod
            }))

            props.history.push('/profile')

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
