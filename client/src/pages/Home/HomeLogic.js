import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/product/productActions';

function HomeLogic() {
    const getProductsReducer = useSelector(state => state.getProductsReducer)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])
    

    return { getProductsReducer }
}

export default HomeLogic