import React from 'react'
import './styles.css'
import HomeLogic from './HomeLogic'
//components
import Loading from '../../components/Loading';
import ProductCardHome from './ProductCardHome';


function Home({filteredProducts}) {

    const { 
        getProductsReducer,
        sortByPrice,
        handleSortByPrice
    } = HomeLogic()
    
    
    return ( 
        getProductsReducer.loading ? <Loading/> : 
        getProductsReducer.error ? <div>Error! {getProductsReducer.error}</div> :
        getProductsReducer?.data.length === 0 ? <div>There are no products to display.</div> :
        <>
            <div className="filter-container">
                <span>Sort by price: </span>
                <select onChange={handleSortByPrice}>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="products-container">
                {
                    getProductsReducer.data
                    .sort((prev, next)=> prev.price > next.price ? sortByPrice : sortByPrice * -1)
                    .filter(product => filteredProducts ? product.mainCategory === filteredProducts : product)
                    .map( product => <ProductCardHome key={product._id} {...product} /> )
                }
            </div>
        </>
    )
}

export default Home
