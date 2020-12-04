import React from 'react'
import './styles.css'
import ProductDetailsLogic from "./ProductDetailsLogic";
//components
import Loading from "../../components/Loading";
import { FaCartArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';


function ProductDetails(props) {

    const {
        getProductDetailsReducer, 
        quantity, 
        decreaseQuantity, 
        increaseQuantity, 
        handleAddtoCart
    } = ProductDetailsLogic(props)
    

    return (
        getProductDetailsReducer.loading ? <Loading /> :
        getProductDetailsReducer.error ? <div>{getProductDetailsReducer.error}</div> :
        <div className="container-details">
            <div className="container-image">
                <img src={getProductDetailsReducer.data.image} alt="bike" loading="lazy"/>
            </div>
            <div className="container-text">
                <p className="product-name">{getProductDetailsReducer.data.name}</p>
                <div className="product-description">
                    <p className="text-secondary">Category: {getProductDetailsReducer.data.mainCategory} - {getProductDetailsReducer.data.subCategory}</p>
                    <br/>
                    <p>Brand: {getProductDetailsReducer.data.brand}</p><br/>
                    <p>{getProductDetailsReducer.data.description}</p><br/>
                    <p className="text-secondary">Quantity: <span>{ getProductDetailsReducer.data.stockCount > 0 ? `${getProductDetailsReducer.data.stockCount} items available` : `Out of stock` }</span></p>
                    <p className="product-price">$ {getProductDetailsReducer.data.price}</p>
                </div>
                <div className="container-action">
                    {
                        getProductDetailsReducer.data.stockCount > 0
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