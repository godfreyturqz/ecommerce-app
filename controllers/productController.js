//models
const ProductModel = require('../models/ProductModel')

//create
module.exports.createProduct = async (req, res, next)=>{
    try {
        const data = await ProductModel.create(req.body)
        res.status(201).json({message: 'created successfully', data})
    } catch (error) {
        res.status(409).json(error)
    }
}

//read @DESC Get all products
module.exports.getProductList = async (req, res, next)=>{
    try {
        const data = await ProductModel.find({})
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

//read @DESC Get specific product details
module.exports.getProductDetails = async (req, res, next)=>{
    try {
        const data = await ProductModel.findById(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

//update
module.exports.updateProduct = async (req, res, next)=>{
    try {
        const data = await ProductModel.findByIdAndUpdate(req.params.id, req.body).then(() => ProductModel.findById(req.params.id))
        res.status(200).json({message: 'updated successfully', data})
    } catch (error) {
        res.status(404).json(error)
    }
}

//delete
module.exports.deleteProduct = async (req, res, next)=>{
    try {
        const data = await ProductModel.findByIdAndRemove(req.params.id)
        res.status(200).json({message: 'deleted successfully', data})
    } catch (error) {
        res.status(404).json(error)
    }
}