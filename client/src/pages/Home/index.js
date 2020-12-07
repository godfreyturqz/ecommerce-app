import React, {useState} from 'react'
import './styles.css'
import HomeLogic from './HomeLogic'
//components
import Loading from '../../components/Loading';
import ProductCard from './ProductCard';


function Home({filteredProducts}) {
    const { getProductsReducer } = HomeLogic()
    const [sortByPrice, setSortByPrice] = useState(1)
    
    return ( 
        getProductsReducer.loading ? <Loading/> : 
        getProductsReducer.error ? <div>{getProductsReducer.error}</div> :
        getProductsReducer.data && getProductsReducer.data.length !== 0 ?
        <div className="products-container">
            <button onClick={()=> setSortByPrice(prev => prev * -1)}>Sort by price</button>
            {
                getProductsReducer.data
                .sort((a, b)=> a.price > b.price ? sortByPrice : sortByPrice * -1)
                .filter(product => filteredProducts ? product.mainCategory === filteredProducts : product)
                .map( product =>
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