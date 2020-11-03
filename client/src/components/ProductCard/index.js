import React from 'react'
import './styles.css'
import { Link } from "react-router-dom";

function ProductCard(props) {
    return (
        <div className="product-container">
            <div>
                <Link to={props.to}>
                    <img className="product-image" src={props.image} alt="product image"/>
                </Link>
            </div>
            <div className="product-name">
                <Link to={props.to}>{props.name}</Link>
            </div>
            <div className="product-description">
                <p>Category: {props.main} - {props.sub}</p>
                <p>Brand: {props.brand}</p>
            </div>
            <p className="product-price">$ {props.price}</p>
        </div>
    )
}

export default ProductCard
