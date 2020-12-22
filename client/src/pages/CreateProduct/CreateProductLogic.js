import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { createProduct, getProductDetails, updateProduct } from '../../redux/product/productActions'
import { ApiRequest } from '../../services/ApiRequest'
import { useParams } from 'react-router-dom'


const CreateProductLogic = () => {

    const createProductReducer = useSelector(state => state.createProductReducer)
    const updateProductReducer = useSelector(state => state.updateProductReducer)
    const getProductDetailsReducer = useSelector(state => state.getProductDetailsReducer)
    const dispatch = useDispatch()
    const params = useParams()

    const initialState = {
        mainCategory: '',
        subCategory: '',
        brand: '',
        name: '',
        description: '',
        image: '',
        price: '',
        stockCount: ''
    }
    const [productData, setProductData] = useState(initialState)
    const [onUpdate, setOnUpdate] = useState(false)
    const productId = params.id // url parameters for route: '/updateProduct/:id'

    const handleInputs = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileImage = async (e) => {
        try {
            const fileImage = e.target.files[0]
            let formData = new FormData()
            formData.append('image', fileImage)

            const {data} = await new ApiRequest().uploadImage(formData)

            setProductData({
                ...productData,
                image: data.secure_url
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        productId ? 
        dispatch(updateProduct(productId, productData)) :
        dispatch(createProduct(productData))
        setProductData({...initialState})
    }

    useEffect(() => {
        if(productId){
            setOnUpdate(true)
            dispatch(getProductDetails(productId))
            setProductData(getProductDetailsReducer.data)
        } else {
            setOnUpdate(false)
        }
    // eslint-disable-next-line
    }, [])


    return {
        createProductReducer, 
        updateProductReducer, 
        onUpdate,
        productData, 
        handleInputs,
        handleFileImage,
        handleSubmit 
    }
}

export default CreateProductLogic
