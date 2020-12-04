import React from 'react'
import './styles.css'
import HomeLogic from './HomeLogic'
//components
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard';


function Home() {
    const { getProductsReducer } = HomeLogic()
    
    return ( 
        getProductsReducer.loading ? <Loading/> : 
        getProductsReducer.error ? <div>{getProductsReducer.error}</div> :
        getProductsReducer.data && getProductsReducer.data.length !== 0 ?
        <div className="products-container">
            {
                getProductsReducer.data.map( product =>
                    <ProductCard
                    key={product._id}
                    to={`/product/details/${product._id}`}
                    image={product.image}
                    name={product.name}
                    mainCategory={product.mainCategory}
                    subCategory={product.subCategory}
                    brand={product.brand}
                    price={product.price}
                    />
                )
            }
        </div>
        :
        <div>There are no products to display.</div>
    )
}

export default Home