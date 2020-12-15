import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserOrders } from '../../redux/order/orderActions'


const ProfileLogic = () => {

    const getUserOrdersReducer = useSelector(state => state.getUserOrdersReducer)
    const authReducer = useSelector(state => state.authReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserOrders(authReducer.userId))

    }, [dispatch, authReducer.userId])


    return {
        getUserOrdersReducer
    }
}

export default ProfileLogic
