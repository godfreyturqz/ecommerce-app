import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getProducts, deleteProduct } from "../../redux/product/productActions";

function ProductManagementLogic(props) {
    const getProductsReducer = useSelector(state => state.getProductsReducer)
    const deleteProductReducer = useSelector(state => state.deleteProductReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
        
    }, [dispatch, deleteProductReducer.data])

    const handleEdit = (productId) => {
        props.history.push(`/updateProduct/${productId}`)
    }
    const handleDelete = (productId) => {
        dispatch(deleteProduct(productId))
    }

    return { getProductsReducer, handleEdit, handleDelete }
}

export default ProductManagementLogic