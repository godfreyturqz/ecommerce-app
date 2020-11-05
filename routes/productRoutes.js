const express = require('express')
const router = express.Router()
//controller
const productController = require('../controllers/productController')

// routes for /api/products
router.get('/', productController.getProductList)
router.get('/:id', productController.getProductDetails)
router.post('/', productController.createProduct)
router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.updateProduct)


module.exports = router