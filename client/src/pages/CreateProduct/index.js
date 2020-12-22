import React from 'react'
import './styles.css'
import CreateProductLogic from './CreateProductLogic'
//components
import Loading from '../../components/Loading';


function CreateProduct() {

    const {
        createProductReducer, 
        updateProductReducer, 
        productId,
        productData, 
        setProductData,
        handleInputs, 
        handleSubmit 
    } = CreateProductLogic()
    

    return (
        createProductReducer.loading || updateProductReducer.loading ? <div><Loading/></div> :
        createProductReducer.error || updateProductReducer.error ? <div>{createProductReducer.error}{updateProductReducer.error}</div> :
            <form onSubmit={handleSubmit}>
                <h1>{ productId ? 'Update' : 'Enter' } Product Information</h1>

                <div>main category</div>
                <input type="text" name="mainCategory" value={productData.mainCategory} onChange={handleInputs}/>

                <div>sub category</div>
                <input type="text" name="subCategory" value={productData.subCategory} onChange={handleInputs}/>

                <div>brand</div>
                <input type="text" name="brand" value={productData.brand} onChange={handleInputs}/>

                <div>name</div>
                <input type="text" name="name" value={productData.name} onChange={handleInputs}/>

                <div>description</div>
                <textarea cols="35" rows="5" name="description" value={productData.description} onChange={handleInputs}/>
                
                <div>price</div>
                <input type="text" name="price" value={productData.price} onChange={handleInputs}/>

                <div>Number of Stocks</div>
                <input type="text" name="stockCount" value={productData.stockCount} onChange={handleInputs}/>
            </form>
    )
}

export default CreateProduct