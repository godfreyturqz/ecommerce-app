import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { createProduct, getProductDetails, updateProduct } from '../../redux/product/productActions'
import { useParams } from "react-router-dom"


function CreateProductLogic() {
    const createProductReducer = useSelector(state => state.createProductReducer)
    const updateProductReducer = useSelector(state => state.updateProductReducer)
    const getProductDetailsReducer = useSelector(state => state.getProductDetailsReducer)

    const [productData, setProductData] = useState({
        mainCategory: '',
        subCategory: '',
        brand: '',
        name: '',
        description: '',
        image: '',
        price: '',
        stockCount: ''
    })

    // fetch url parameters of route: updateProduct/:id
    const {id: productId} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        if(productId){
            dispatch(getProductDetails(productId))
            setProductData({
                mainCategory: getProductDetailsReducer.data.mainCategory,
                subCategory: getProductDetailsReducer.data.subCategory,
                brand: getProductDetailsReducer.data.brand,
                name: getProductDetailsReducer.data.name,
                description: getProductDetailsReducer.data.description,
                image: getProductDetailsReducer.data.image,
                price: getProductDetailsReducer.data.price,
                stockCount: getProductDetailsReducer.data.stockCount
            })
        }
    },
    [
        dispatch,
        productId,
        getProductDetailsReducer.data.mainCategory,
        getProductDetailsReducer.data.subCategory,
        getProductDetailsReducer.data.brand,
        getProductDetailsReducer.data.name,
        getProductDetailsReducer.data.description,
        getProductDetailsReducer.data.image,
        getProductDetailsReducer.data.price,
        getProductDetailsReducer.data.stockCount
    ])

    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(productId) {
            dispatch(updateProduct(productId, productData))
        }
        else {
            dispatch(createProduct(productData))
        }
        //clears the input fields after submission
        setProductData({
            mainCategory: '',
            subCategory: '',
            brand: '',
            name: '',
            description: '',
            image: '',
            price: '',
            stockCount: ''
        })
    }

    const handleInputs = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        })
    }


    return {
        createProductReducer, 
        updateProductReducer, 
        productId,
        productData, 
        setProductData,
        handleInputs, 
        handleSubmit 
    }
}

export default CreateProductLogic