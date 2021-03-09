const ProductModel = require('../models/ProductModel')


module.exports.createProduct = async (req, res) => {
    try {
        const data = await ProductModel.create(req.body)
        res.status(201).json({message: 'created successfully', data})
    } catch (error) {
        res.status(409).json(error)
    }
}

module.exports.getProductList = async (req, res) => {
    try {
        const data = await ProductModel.find({}).lean()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports.getProductDetails = async (req, res) => {
    try {
        const data = await ProductModel.findById(req.params.id).lean()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports.updateProduct = async (req, res) => {
    try {
        const data = await ProductModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => ProductModel.findById(req.params.id))
        res.status(200).json({message: 'updated successfully', data})
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        const data = await ProductModel.findByIdAndRemove(req.params.id)
        res.status(200).json({message: 'deleted successfully', data})
    } catch (error) {
        res.status(404).json(error)
    }
}