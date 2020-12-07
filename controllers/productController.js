const ProductModel = require('../models/ProductModel')


//******************************************************************
// CREATE CREATE CREATE >>>>> PRODUCT
//******************************************************************
module.exports.createProduct = async (req, res, next)=>{
    try {
        const data = await ProductModel.create(req.body)
        res.status(201).json({message: 'created successfully', data})
    } catch (error) {
        res.status(409).json(error)
    }
}

//******************************************************************
// GET GET GET >>>>> PRODUCT
//******************************************************************

//.................................
// GET LIST OF ALL PRODUCTS
//.................................
module.exports.getProductList = async (req, res, next)=>{
    try {
        const data = await ProductModel.find({}).lean()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

//.................................
// GET PRODUCT DETAILS
//.................................
module.exports.getProductDetails = async (req, res, next)=>{
    try {
        const data = await ProductModel.findById(req.params.id).lean()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

//******************************************************************
// UPDATE UPDATE UPDATE >>>>> PRODUCT
//******************************************************************

module.exports.updateProduct = async (req, res, next)=>{
    try {
        const data = await ProductModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => ProductModel.findById(req.params.id))
        res.status(200).json({message: 'updated successfully', data})
    } catch (error) {
        res.status(404).json(error)
    }
}

//******************************************************************
// DELETE DELETE DELETE >>>>> PRODUCT
//******************************************************************
module.exports.deleteProduct = async (req, res, next)=>{
    try {
        const data = await ProductModel.findByIdAndRemove(req.params.id)
        res.status(200).json({message: 'deleted successfully', data})
    } catch (error) {
        res.status(404).json(error)
    }
}