import React from 'react'
import './styles.css'
import { Link } from "react-router-dom";

function ProductCardHome({ _id, image, name, mainCategory, subCategory, brand, price}) {

    const reactRouterLinkTo = `/product/details/${_id}`

    return (
        <div className="product-container">
            <div>
                <Link to={reactRouterLinkTo}>
                    <img className="product-image" src={image} alt="product" loading="lazy"/>
                </Link>
            </div>
            <div className="product-name">
                <Link to={reactRouterLinkTo}>{name}</Link>
            </div>
            <div className="product-description">
                <p>Category: {mainCategory} - {subCategory}</p>
                <p>Brand: {brand}</p>
            </div>
            <p className="product-price">
                $ {price}
                <Link to={reactRouterLinkTo}><button>Details</button></Link>
            </p>
        </div>
    )
}

export default ProductCardHome
