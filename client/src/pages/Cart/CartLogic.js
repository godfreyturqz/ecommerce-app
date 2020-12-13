import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from '../../redux/cart/cartActions'
import { getTotalPrice } from '../../redux/order/orderActions'
import { LocalStorage } from '../../services/LocalStorage'

const CartLogic = (props) => {

    const cartReducer = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    
    // const incrementQty = (params) => {
    //     dispatch(addToCart(productId, quantity))
    // }

    const totalPrice = cartReducer.data
                        .map(item => item.price * item.quantity)
                        .reduce((prev, next) => prev + next, 0)
    
    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId))
    }
    
    const handleCheckout = () => {
        dispatch(getTotalPrice(totalPrice))
        props.history.push("/shipping")
    }


    return { 
        cartReducer,
        totalPrice,
        handleRemoveFromCart,
        handleCheckout
    }
}

export default CartLogic
