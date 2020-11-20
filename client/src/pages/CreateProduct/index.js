import React, { useState, useEffect } from 'react'
//styles
import './styles.css'
//image
import Filebase from "react-file-base64";
//redux
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getProductDetails, updateProduct } from '../../redux/product/productActions';
//router-dom
import { useParams } from "react-router-dom";
//components
import Loading from '../../components/Loading';


function CreateProduct() {
    // current state
    const {loading, data, error} = useSelector(state => state.createProductReducer)
    const getProductDetailsReducer = useSelector(state => state.getProductDetailsReducer)
    const updateProductReducer = useSelector(state => state.updateProductReducer)

    // values of input forms
    const [productData, setProductData] = useState({
        mainCategory: '',
        subCategory: '',
        brand: '',
        name: '',
        description: '',
        image: '',
        price: '',
        stockCount: ''
    })

    // fetch url parameters of route: updateProduct/:id
    const {id: productId} = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        if(productId){
            dispatch(getProductDetails(productId))
            
            setProductData(getProductDetailsReducer.data)
        }
    }, [dispatch, productId, getProductDetailsReducer.data])

    //submits or update product information
    function handleSubmit(e) {
        e.preventDefault()

        if(productId) {
            dispatch(updateProduct(productId, productData))
        }
        else {
            dispatch(createProduct(productData))
        }
        
        //clears the input fields after submission
        setProductData({})
    }

    return (
        loading || updateProductReducer.loading ? <div><Loading/></div> :
        error || updateProductReducer.error ? <div>{error}{updateProductReducer.error}</div> :
        data ? 
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Enter Product Information</h1>
                <div>main category</div>
                <input type="text" value={productData.mainCategory} onChange={e => setProductData({...productData, mainCategory: e.target.value})}/>

                <div>sub category</div>
                <input type="text" value={productData.subCategory} onChange={e => setProductData({...productData, subCategory: e.target.value})}/>

                <div>brand</div>
                <input type="text" value={productData.brand} onChange={e => setProductData({...productData, brand: e.target.value})}/>

                <div>name</div>
                <input type="text" value={productData.name} onChange={e => setProductData({...productData, name: e.target.value})}/>

                <div>description</div>
                <input type="text" value={productData.description} onChange={e => setProductData({...productData, description: e.target.value})}/>
                
                <div>price</div>
                <input type="text" value={productData.price} onChange={e => setProductData({...productData, price: e.target.value})}/>

                <div>Number of Stocks</div>
                <input type="text" value={productData.stockCount} onChange={e => setProductData({...productData, stockCount: e.target.value})}/>
                <div>
                    <Filebase
                        type="file"
                        multiple={false}
                        onDone={ ({base64})=> setProductData({...productData, image: base64})}
                        
                    />
                </div>
                {
                    productId ? <button type="submit">Update</button>
                    : <button type="submit">Submit</button>
                }
                
            </form>
        </div> : <div>There's an error on the data</div>
    )
}

export default CreateProduct
