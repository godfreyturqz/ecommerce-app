const express = require('express')
const router = express.Router()
//controllers
const productController = require('../controllers/productController')
const authController = require('../controllers/authController')
const orderController = require('../controllers/orderController')

//********************************************************************
// ROUTES FOR /api/*
//********************************************************************

//.............................................
// PRODUCTS RELATED
//.............................................
router.post('/products', productController.createProduct)
router.get('/products', productController.getProductList) //Get all products
router.get('/products/:id', productController.getProductDetails) //Get specific product details
router.put('/products/:id', productController.updateProduct)
router.delete('/products/:id', productController.deleteProduct)

//.............................................
// USERS RELATED
//.............................................
router.get('/signup', authController.getUsers)
router.post('/signup', authController.createUser)
router.post('/login', authController.loginUser)
router.get('/logout', authController.logout)

router.get('/requireAuth', authController.requireAuth)

// for dev purposes
router.delete('/deleteAll', authController.deleteAllUsers)

//.............................................
// ORDERS RELATED
//.............................................
router.post('/orders', orderController.createOrder)
router.get('/orders', orderController.getOrderList)
router.put('/orders/:id', orderController.updateOrder)
router.delete('/orders/:id', orderController.deleteOrder)


module.exports = router