import React from 'react'
import './styles.css'
import { Link } from "react-router-dom";

function ProductCard(props) {
    return (
        <div className="product-container">
            <div>
                <Link to={props.to}>
                    <img className="product-image" src={props.image} alt="product"/>
                </Link>
            </div>
            <div className="product-name">
                <Link to={props.to}>{props.name}</Link>
            </div>
            <div className="product-description">
                <p>Category: {props.mainCategory} - {props.subCategory}</p>
                <p>Brand: {props.brand}</p>
            </div>
            <p className="product-price">
                $ {props.price}
                <Link to={props.to}><button>Details</button></Link>
            </p>
            
        </div>
    )
}

export default ProductCard
