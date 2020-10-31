import React from 'react'
import data from "./../Data";
import { Link } from "react-router-dom";
import './../App.css';

function ProductScreen(props) {
    const product = data.products.find(product => product.id === props.match.params.id)
    return (
        <>
            <div>
                <Link to="/">Back to result</Link>
            </div>

            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product"/>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product.numReviews} Reviews)
                        </li>
                        <li>
                            <strong>${product.price}</strong>
                        </li>
                        Description:
                        <div>{product.description}</div>
                    </ul>
                </div>
            </div>

            <div className="details-action">
                <ul>
                    <li>Price: {product.price}</li>
                    <li>Status: {product.status}</li>
                    <li>Qty:
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </li>
                    <li>
                        <button>Add</button>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default ProductScreen
