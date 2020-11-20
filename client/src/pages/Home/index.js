//styles
import './styles.css';
//react
import React, { useEffect } from 'react'
//redux and action creators
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/product/productActions';
//components
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard';


function Home() {
    const {loading, data, error} = useSelector(state => state.getProductsReducer)
    const dispatch = useDispatch()
    
    useEffect(() => {

        dispatch(getProducts())

    }, [dispatch])
    
    return ( 
        loading ? <Loading/> : 
        error ? <div>{error}</div> :
        data && data.length !== 0 ?
        <div className="products-container">
            {
                data.map( product =>

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

                )
            }
        </div>
        : <div>There are no products to display.</div>
    )
}

export default Home