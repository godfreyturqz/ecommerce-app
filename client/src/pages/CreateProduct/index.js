import React, {useState} from 'react'
//styles
import './styles.css'
//image
import Filebase from "react-file-base64";
//redux
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from '../../redux/product/productActions';
//components
import Loading from '../../components/Loading';

function CreateProduct() {
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
    const {loading, data, error} = useSelector(state => state.createProductReducer)
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createProduct(productData))
        setProductData({})
    }

    return (
        loading ? <div><Loading/></div> :
        error ? <div>{error}</div> :
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
                <button type="submit">Submit</button>
            </form>
        </div> : <div>There's an error on the data</div>
    )
}

export default CreateProduct
