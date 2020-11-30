//react
import React from 'react'
//styles
import './styles.css'
//logic
import ProductDetailsLogic from "./ProductDetailsLogic";
//components
import Loading from "../../components/Loading";
import { FaCartArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';


function ProductDetails(props) {
    const {productDetailsReducer, quantity, decreaseQuantity, increaseQuantity, handleAddtoCart} = ProductDetailsLogic(props)
    

    return (
        productDetailsReducer.loading ? <Loading /> :
        productDetailsReducer.error ? <div>{productDetailsReducer.error}</div> :
        <div className="container-details">
            <div className="container-image">
                <img src={productDetailsReducer.data.image} alt="bike" loading="lazy"/>
            </div>
            <div className="container-text">
                <p className="product-name">{productDetailsReducer.data.name}</p>
                <div className="product-description">
                    <p className="text-secondary">Category: {productDetailsReducer.data.mainCategory} - {productDetailsReducer.data.subCategory}</p>
                    <br/>
                    <p>Brand: {productDetailsReducer.data.brand}</p>
                    <br/>
                    <p>{productDetailsReducer.data.description}</p>
                    <br/>
                    <p className="text-secondary">Quantity: 
                        {
                            productDetailsReducer.data.stockCount > 0
                            ?
                            <span> {productDetailsReducer.data.stockCount} items available</span>
                            :
                            <span>Out of stock</span>
                        }
                    </p>
                    <p className="product-price">$ {productDetailsReducer.data.price}</p>
                </div>
                <div className="container-action">
                    {
                        productDetailsReducer.data.stockCount > 0
                        ?
                        <>
                            <div className="counter">
                                <span>Qty: </span>
                                <button onClick={decreaseQuantity}><FaArrowLeft/></button>
                                <p>{quantity}</p>
                                <button onClick={increaseQuantity}><FaArrowRight/></button>
                            </div>
                            <button onClick={handleAddtoCart}><FaCartArrowDown /> Add to Cart</button> 
                        </>
                        : 
                        <p className="text-secondary">Out of stock</p> 
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDetails