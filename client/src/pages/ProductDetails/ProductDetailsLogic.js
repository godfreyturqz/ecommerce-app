import { useState, useEffect } from 'react'
//redux
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from '../../redux/product/productActions';

function ProductDetailsLogic(props) {
    // all initial states
    const [quantity, setQuantity] = useState(1)
    const productDetailsReducer = useSelector(state => state.getProductDetailsReducer)

    // to initially load the page and update if there's any update
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductDetails(props.match.params.id))

    }, [dispatch, props.match.params.id])

    // counter
    const decreaseQuantity = () => (quantity > 1) ? setQuantity(prev => prev - 1) : 1
    const increaseQuantity = () => (quantity < productDetailsReducer.data.stockCount) ? setQuantity(prev => prev + 1) : null
    
    // add to cart
    const handleAddtoCart = () => props.history.push(`/cart/${props.match.params.id}?qty=${quantity}`)


    return {productDetailsReducer, quantity, decreaseQuantity, increaseQuantity, handleAddtoCart}
}

export default ProductDetailsLogic