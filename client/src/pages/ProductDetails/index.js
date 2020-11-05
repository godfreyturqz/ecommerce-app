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
import Counter from '../../components/Counter';


function ProductDetails(props) {
    const [quantity, setQuantity] = useState(1)
    const {loading, data, error} = useSelector(state => state.productDetailsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductDetails(props.match.params.id))
    }, [dispatch, props.match.params.id])

    const handleAddtoCart = () => {
        props.history.push(`/cart/${props.match.params.id}?qty=${quantity}`)
    }
    console.log(props.match.params.id)

    function decreaseQuantity(){
        if(quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }
    function increaseQuantity(){
        if(quantity < data.stockCount) {
            setQuantity(prev => prev + 1)
        }
    }
    return (
            loading ? <Loading /> :
            error ? <div>{error}</div> :
            <div className="details">
                <div className="container-link">
                    <Link to="/">Back to result</Link>
                </div>
                <div className="container-image">
                    <img src={data.image} alt="bike"/>
                </div>
                <div className="container-details">
                    <h2 className="product-name">{data.name}</h2>
                    <div className="product-description">
                        <p className="text-secondary">Category: {data.mainCategory} - {data.subCategory}</p>
                        <br/>
                        <p>Brand: {data.brand}</p>
                        <br/>
                        <p>{data.description}</p>
                        <br/>
                        <p className="text-secondary">Quantity: 
                            {data.stockCount > 0
                                ? <span> {data.stockCount} items available</span>
                                : <span>Out of stock</span>
                            }
                        </p>
                        <p className="product-price">$ {data.price}</p>
                    </div>
                    <div className="container-action">
                        {data.stockCount > 0 ?
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
