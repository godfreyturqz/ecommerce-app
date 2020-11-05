//models
const ProductModel = require('../models/ProductModel')

//create
module.exports.createProduct = async (req, res, next)=>{
    try {
        const data = await ProductModel.create(req.body)
        res.status(201).json(data)
    }
    catch (error) {
        res.status(409).json(error)
    }
}

//@PROCESS Read @DESC Get all products
module.exports.getProductList = async (req, res, next)=>{
    try {
        const data = await ProductModel.find({})
        res.status(200).json(data)
    }
    catch (error) {
        res.status(404).json({message: error.message})
    }
}
//@PROCESS Read @DESC Get specific product details
module.exports.getProductDetails = async (req, res, next)=>{
    try {
        const data = await ProductModel.findOne({_id: req.params.id})
        res.status(200).json(data)
    }
    catch (error) {
        res.status(404).json({message: error.message})
    }
}

//update
module.exports.updateProduct = (req, res, next)=>{
    ProductModel.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(()=> ProductModel.findOne({_id: req.params.id}))
    .then(data => res.status(200).json(data))
}

//delete
module.exports.deleteProduct = (req, res, next)=>{
    ProductModel.findByIdAndRemove({_id: req.params.id})
    .then(data => res.status(200).json(data))
}

