import React, {useState} from 'react'
//image
import Filebase from "react-file-base64";
//redux
import { useDispatch } from "react-redux";
// import { createProduct } from '../redux/product/productActions';

function Form() {
    const [productData, setProductData] = useState({
        main: '',
        sub: '',
        name: '',
        image: '',
        price: '',
        stockCount: ''
    })
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        // dispatch(createProduct(productData))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>main category</label>
                <input type="text" value={productData.main} onChange={e => setProductData({...productData, main: e.target.value})}/>

                <label>sub category</label>
                <input type="text" value={productData.sub} onChange={e => setProductData({...productData, sub: e.target.value})}/>

                <label>name</label>
                <input type="text" value={productData.name} onChange={e => setProductData({...productData, name: e.target.value})}/>
                
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
        </div>
    )
}

export default Form
