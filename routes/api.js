const express = require('express')
const router = express.Router()
//controller
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')

// routes for /api
// Get all products
router.get('/products', productController.getProductList)
//Get specific product details
router.get('/products/:id', productController.getProductDetails)
//Create product
router.post('/products', productController.createProduct)
//Delete specific product
router.delete('/products/:id', productController.deleteProduct)
//Update specific product
router.put('/products/:id', productController.updateProduct)

//New user registration
router.post('/signup', userController.userSignup)
//User login
router.post('/login', userController.userLogin)


module.exports = router