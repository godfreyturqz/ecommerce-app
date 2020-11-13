import React, {useEffect} from 'react'
import './styles.css'
//redux
import { useSelector, useDispatch } from "react-redux";
import { getProductList, deleteProduct } from "../../redux/product/productActions";
//components
import Loading from '../../components/Loading';


function ProductManagement(props) {
    const { loading, data, error } = useSelector(state => state.productListReducer)
    const deleteProductReducer = useSelector(state => state.deleteProductReducer)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getProductList())
        
    }, [dispatch, deleteProductReducer.data])

    const handleEdit = (e) => {
        props.history.push(`/updateProduct/${e.target.value}`)
    }
    const handleDelete = (e) => {
        dispatch(deleteProduct(e.target.value))
    }
    
    return (
        loading ? <div><Loading/></div> :
        error ? <div>{error}</div> :
        data && data.length !== 0 ?
        <div className="table-container">
            <table>
                <thead className="table-header">
                    <tr>
                        <th>Product Id</th>
                        <th>Name</th>
                        <th>Main Category</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>No. of Stocks</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map( product => 
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.mainCategory}</td>
                            <td>{product.subCategory}</td>
                            <td>{product.price}</td>
                            <td>{product.stockCount}</td>
                            <td>
                                <button onClick={handleEdit} value={product._id}>Edit</button>
                            </td>
                            <td>
                                <button onClick={handleDelete} value={product._id}>Delete</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
        : <div>There are no products to display.</div>
    )
}

export default ProductManagement
