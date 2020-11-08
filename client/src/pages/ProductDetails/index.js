//react
import React, { useState, useEffect } from 'react'
//styles
import './styles.css'
//components
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { FaCartArrowDown } from 'react-icons/fa';
//redux
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from '../../redux/product/productActions';


function ProductDetails(props) {
    const [quantity, setQuantity] = useState(1)
    const productDetailsReducer = useSelector(state => state.productDetailsReducer)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getProductDetails(props.match.params.id))

    }, [dispatch, props.match.params.id])


    const handleAddtoCart = () => {
        props.history.push(`/cart/${props.match.params.id}?qty=${quantity}`)
    }

    const decreaseQuantity = () => { if(quantity > 1) setQuantity(prev => prev - 1) }
    const increaseQuantity = () => { if(quantity < productDetailsReducer.data.stockCount) setQuantity(prev => prev + 1) }

    return (
        productDetailsReducer.loading ? <Loading /> :
        productDetailsReducer.error ? <div>{productDetailsReducer.error}</div> :
        <div className="details">
            <div className="container-link">
                <Link to="/">&larr; Back to Home</Link>
            </div>
            <div className="container-image">
                <img src={productDetailsReducer.data.image} alt="bike"/>
            </div>
            <div className="container-details">
                <h2 className="product-name">{productDetailsReducer.data.name}</h2>
                <div className="product-description">
                    <p className="text-secondary">Category: {productDetailsReducer.data.mainCategory} - {productDetailsReducer.data.subCategory}</p>
                    <br/>
                    <p>Brand: {productDetailsReducer.data.brand}</p>
                    <br/>
                    <p>{productDetailsReducer.data.description}</p>
                    <br/>
                    <p className="text-secondary">Quantity: 
                        {productDetailsReducer.data.stockCount > 0
                            ? <span> {productDetailsReducer.data.stockCount} items available</span>
                            : <span>Out of stock</span>
                        }
                    </p>
                    <p className="product-price">$ {productDetailsReducer.data.price}</p>
                </div>
                <div className="container-action">
                    {productDetailsReducer.data.stockCount > 0 ?
                        <div>
                            <div className="counter">
                                <span>Qty: </span>
                                <button onClick={decreaseQuantity}>&larr;</button>
                                <p>{quantity}</p>
                                <button onClick={increaseQuantity}>&rarr;</button>
                            </div>
                            <button onClick={handleAddtoCart}><FaCartArrowDown /> Add to Cart</button> 
                        </div>
                    : <p className="text-secondary">Out of stock</p> 
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
