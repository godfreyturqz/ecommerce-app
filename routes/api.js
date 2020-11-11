const express = require('express')
const router = express.Router()
//controllers
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const orderController = require('../controllers/orderController')

// routes for /api/??

//PRODUCTS RELATED
//Create product
router.post('/products', productController.createProduct)

//Get all products
router.get('/products', productController.getProductList)

//Get specific product details
router.get('/products/:id', productController.getProductDetails)

//Update specific product
router.put('/products/:id', productController.updateProduct)

//Delete specific product
router.delete('/products/:id', productController.deleteProduct)



//USERS RELATED
router.post('/signup', userController.userSignup)
router.post('/login', userController.userLogin)



//ORDERS RELATED
router.get('/orders', orderController.getOrderList)
router.post('/orders', orderController.createOrder)


module.exports = router