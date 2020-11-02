import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductDetails } from '../redux/productActions';
import './../App.css';

function ProductDetails(props) {
    const [qty, setQty] = useState(1)
    const {loading, data, error} = useSelector(state => state.productDetails)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductDetails(props.match.params.id))
    }, [dispatch, props.match.params.id])

    const handleAddtoCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }
    console.log(data)
    return (
            loading ? <div>Loading...</div> :
            error ? <div>{error}</div> :
            <div>
                <div>
                    <Link to="/">Back to result</Link>
                </div>

                <div className="details">
                    <div className="details-image">
                        <img className="product-image" src={data.image} alt="bike"/>
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                                <h4>{data.name}</h4>
                            </li>
                            <li>
                                <strong>${data.price}</strong>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="details-action">
                    <ul>
                        <li>Price: {data.price}</li>
                        <li>Status: {data.stockCount > 0 ? "In Stock" : "Unavailable"}</li>
                        <li>Qty:
                            <select name="" id="" value={qty} onChange={e => setQty(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </li>
                        <li>
                            {data.stockCount > 0 
                                ? <button onClick={handleAddtoCart}>Add</button> 
                                : <div>Out of stock.</div> 
                            }
                            
                        </li>
                    </ul>
                </div>
            </div> 
    )
}

export default ProductDetails
