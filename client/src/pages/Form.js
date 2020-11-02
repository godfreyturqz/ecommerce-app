import React, {useState} from 'react'
import Filebase from "react-file-base64";

function Form() {
    const [productData, setProductData] = useState({
        main: '',
        sub: '',
        name: '',
        image: '',
        price: '',
        stockCount: ''
    })
    const handleSubmit = ()=> {

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">main</label>
                <input type="text" value={productData.main} onChange={e => setProductData({...productData, main: e.target.value})}/>
                <label htmlFor="">sub</label>
                <input type="text" value={productData.sub} onChange={e => setProductData({...productData, sub: e.target.value})}/>
                <label htmlFor="">name</label>
                <input type="text" value={productData.name} onChange={e => setProductData({...productData, name: e.target.value})}/>
                
                <label htmlFor="">price</label>
                <input type="text" value={productData.price} onChange={e => setProductData({...productData, price: e.target.value})}/>
                <label htmlFor="">stock count</label>
                <input type="text" value={productData.stockCount} onChange={e => setProductData({...productData, stockCount: e.target.value})}/>
                <div>
                    <label htmlFor="">image</label>
                    <input type="text" value={productData.image} onChange={e => setProductData({...productData, image: e.target.value})}/>
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
