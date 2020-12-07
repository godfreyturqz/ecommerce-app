import React from 'react'
import './styles.css'
import ProductManagementLogic from './ProductManagementLogic'
//components
import Loading from '../../components/Loading';


function ProductManagement(props) {
    const { getProductsReducer, handleEdit, handleDelete } = ProductManagementLogic(props)
    
    return (
        getProductsReducer.loading ? <div><Loading/></div> :
        getProductsReducer.error ? <div>{getProductsReducer.error}</div> :
        getProductsReducer.data && getProductsReducer.data.length !== 0 ?
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
                    getProductsReducer.data.map( product => 
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.mainCategory}</td>
                            <td>{product.subCategory}</td>
                            <td>{product.price}</td>
                            <td>{product.stockCount}</td>
                            <td>
                                <button onClick={() => handleEdit(product._id)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(product._id)}>Delete</button>
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
