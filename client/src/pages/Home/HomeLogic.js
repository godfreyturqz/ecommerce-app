import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/product/productActions';

function HomeLogic() {

    const [sortByPrice, setSortByPrice] = useState(1)
    // redux
    const getProductsReducer = useSelector(state => state.getProductsReducer)
    const dispatch = useDispatch()

    // changes the sortByPrice State manually by selecting either highest or lowest
    const handleSortByPrice = e => 
        e.target.value === 'highest'
        ? setSortByPrice(-1)
        : setSortByPrice(1)

    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])


    return { 
        getProductsReducer,
        sortByPrice,
        handleSortByPrice
    }
}

export default HomeLogic
