//styles
import './styles.css';
//react
import React, { useEffect } from 'react'
//redux and action creators
import { useSelector, useDispatch } from 'react-redux';
import { getProductList } from '../../redux/product/productActions';
//components
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard';


function Home() {
    const productListReducer = useSelector(state => state.productListReducer)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getProductList())

    }, [dispatch])
    

    return ( 
        // LOADING AND ERROR
        productListReducer.loading ? <Loading/> : 
        productListReducer.error ? <div>{productListReducer.error}</div> :
        productListReducer.data && productListReducer.data.length !== 0 ? 
        <div className="products-container">
            { productListReducer.data.map(product =>
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