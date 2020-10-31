import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
// import data from "./../Data";
import './../App.css';
// import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
    // const [products, setProducts] = useState([])
    const productList = useSelector(state => state.productList)
    const { products, loading, error } = productList
    const dispatch = useDispatch()

    // useEffect(() => {
    //     const fetchData = async ()=> {
    //         const {data} = await axios.get('/api/products')
    //         setProducts(data)
    //     }
    //     fetchData()
    //     return () => {
    //         //
    //     }
    // }, [])
    useEffect(() => {
        dispatch(listProducts())
        return () => {
            //
        }
    }, [])

    // useEffect(()=> {
    //     axios.get(`/api/products`)
    //     .then(res => {
    //         setProducts(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])

return ( loading ? <div>Loading...</div> : error ? <div>{error}</div> :
        <ul className="products">
            {/* { data.products.map(product => */}
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

export default HomeScreen
