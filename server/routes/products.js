const express = require('express')
const router = express.Router()
const ProductModel = require('./../models/Product')

router.get('/', async (req, res)=>{
    try {
        const data = await ProductModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
router.get('/:id', (req, res)=>{
    ProductModel.find({_id: req.params.id})
    .then(data => res.json(data))
})
router.post('/', async (req, res)=>{
    try {
        const createProduct = await ProductModel.create(req.body)
        res.status(201).json(createProduct)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
    // ProductModel.create(req.body)
    // .then(data => res.send(data))
    // .catch(error => res.send(error))
})
router.delete('/:id', (req, res)=>{
    ProductModel.findByIdAndRemove({_id: req.params.id})
    .then(data => res.status(200).send(data))
})
router.put('/:id', (req, res)=>{
    ProductModel.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(()=> ProductModel.findOne({_id: req.params.id}))
    .then(data => res.status(200).send(data))
})

module.exports = router