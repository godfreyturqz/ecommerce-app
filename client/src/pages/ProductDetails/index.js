//react
import React, { useState, useEffect } from 'react'
//styles
import './styles.css'
//components
import Loading from "../../components/Loading";
import { FaCartArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
//redux
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from '../../redux/product/productActions';


function ProductDetails(props) {
    // all initial states
    const [quantity, setQuantity] = useState(1)
    const productDetailsReducer = useSelector(state => state.getProductDetailsReducer)
    
    // to initially load the page and update if there's any update
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductDetails(props.match.params.id))

    }, [dispatch, props.match.params.id])

    // counter
    const decreaseQuantity = () => (quantity > 1) ? setQuantity(prev => prev - 1) : 1
    const increaseQuantity = () => { if(quantity < productDetailsReducer.data.stockCount) setQuantity(prev => prev + 1) }
    
    // add to cart
    const handleAddtoCart = () => props.history.push(`/cart/${props.match.params.id}?qty=${quantity}`)

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
                            ? <span> {productDetailsReducer.data.stockCount} items available</span>
                            : <span>Out of stock</span>
                        }
                    </p>
                    <p className="product-price">$ {productDetailsReducer.data.price}</p>
                </div>
                <div className="container-action">
                    {
                        productDetailsReducer.data.stockCount > 0 ?
                        <div>
                            <div className="counter">
                                <span>Qty: </span>
                                <button onClick={decreaseQuantity}><FaArrowLeft/></button>
                                <p>{quantity}</p>
                                <button onClick={increaseQuantity}><FaArrowRight/></button>
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