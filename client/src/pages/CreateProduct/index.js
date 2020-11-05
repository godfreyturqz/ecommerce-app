import React, {useState} from 'react'
//styles
import './styles.css'
//image
import Filebase from "react-file-base64";
//redux
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from '../../redux/product/productActions';

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
        loading ? <div>loading</div> :
        error ? <div>{error}</div> :
        data ? 
        <div>
            <form onSubmit={handleSubmit}>
                <label>main category</label>
                <input type="text" value={productData.mainCategory} onChange={e => setProductData({...productData, mainCategory: e.target.value})}/>

                <label>sub category</label>
                <input type="text" value={productData.subCategory} onChange={e => setProductData({...productData, subCategory: e.target.value})}/>

                <label>brand</label>
                <input type="text" value={productData.brand} onChange={e => setProductData({...productData, brand: e.target.value})}/>

                <label>name</label>
                <input type="text" value={productData.name} onChange={e => setProductData({...productData, name: e.target.value})}/>

                <label>description</label>
                <input type="text" value={productData.description} onChange={e => setProductData({...productData, description: e.target.value})}/>
                
                <label>price</label>
                <input type="text" value={productData.price} onChange={e => setProductData({...productData, price: e.target.value})}/>

                <label>stock count</label>
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
