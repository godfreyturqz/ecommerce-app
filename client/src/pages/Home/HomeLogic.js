import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/product/productActions';

function HomeLogic() {

    const getProductsReducer = useSelector(state => state.getProductsReducer)
    const [sortByPrice, setSortByPrice] = useState(1)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])

    const handleSortByPrice = (e) => {
        if(e.target.value === 'highest') {
            setSortByPrice(-1)
        } else {
            setSortByPrice(1)
        }
    }
    

    return { 
        getProductsReducer,
        sortByPrice,
        handleSortByPrice
    }
}

export default HomeLogic
