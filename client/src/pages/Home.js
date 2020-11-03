//styles
import './../App.css';
//react
import React, { useEffect } from 'react'
//redux and action creators
import { useSelector, useDispatch } from 'react-redux';
import { getProductList } from '../redux/product/productActions';
//components
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';

function Home() {
    const {loading, products, error} = useSelector(state => state.productListReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch])

    return ( 
        // LOADING AND ERROR
        loading ? <Loading/> : 
        error ? <div>{error}</div> :
        products ? 
        <div className="products">
            { products.map(product =>
                <ProductCard
                key={product._id}
                to={'/product/' + product._id}
                image={product.image}
                name={product.name}
                brand={product.brand}
                price={product.price}
                />
            )}
        </div>
        : <div>There are no products to display.</div>
    )
}

export default Home