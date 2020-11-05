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
    const {loading, data, error} = useSelector(state => state.productListReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch])
    console.log(data)
    return ( 
        // LOADING AND ERROR
        loading ? <Loading/> : 
        error ? <div>{error}</div> :
        data ? 
        <div className="products">
            { data.map(product =>
                <ProductCard
                key={product._id}
                to={'/product/details/' + product._id}
                image={product.image}
                name={product.name}
                mainCategory={product.mainCategory}
                subCategory={product.subCategory}
                brand={product.brand}
                price={product.price}
                />
            )}
        </div>
        : <div>There are no products to display.</div>
    )
}

export default Home