import React from 'react'
import ProfileLogic from './ProfileLogic'
import './styles.css'
//components
import Loading from '../../components/Loading'
import OrderRowCard from '../Orders/OrderRowCard'


const Profile = () => {
    
    const { getUserOrdersReducer } = ProfileLogic()

    return (
        getUserOrdersReducer.loading ? <Loading /> :
        getUserOrdersReducer.error ? <div>{getUserOrdersReducer.error}</div> :
        getUserOrdersReducer.data.length === 0 ? <div>There are no orders</div> :
        <div className="profile-container">
            {
                getUserOrdersReducer.data.map(item => <OrderRowCard key={item._id} {...item} />)
            }
        </div>
    )
}

export default Profile
