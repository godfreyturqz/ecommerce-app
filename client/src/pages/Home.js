import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import './../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../redux/productActions';

function Home() {
    const {loading, products, error} = useSelector(state => state.productList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [])

    return ( 
        loading ? <div>Loading...</div> : 
        error ? <div>{error}</div> :
        <ul className="products">
            { products.map(product =>
                <li key={product.id}>
                    <div className="product">
                        <Link to={'/product/' + product.id}>
                            <img className="product-image" src={product.image} alt="bike"/>
                        </Link>
                        <div className="product-name">
                            <Link to={'/product/' + product.id}>{product.name}</Link>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-rating">{product.rating} Stars ({product.numReviews} reviews)</div>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Home
