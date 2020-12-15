const express = require('express')
const router = express.Router()
//controllers
const productController = require('../controllers/productController')
const authController = require('../controllers/authController')
const orderController = require('../controllers/orderController')
const paymentController = require('../controllers/paymentController')

//********************************************************************
// ROUTES FOR /api/...
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

router.get('/isAuth', authController.isAuth)

// for dev purposes
router.delete('/deleteAll', authController.deleteAllUsers)

//.............................................
// ORDERS RELATED
//.............................................
router.post('/orders', orderController.createOrder)
router.get('/orders', orderController.getOrderList)
router.get('/orders/:id', orderController.getOrderDetails)
router.get('/orders/user/:id', orderController.getUserOrders)
router.put('/orders/:id', orderController.updateOrder)
router.delete('/orders/:id', orderController.deleteOrder)

//.............................................
// PAYMENT RELATED
//.............................................
router.post('/payment/paypal/create' , paymentController.createPayment)
router.post('/payment/paypal/execute', paymentController.setIsPaid)

module.exports = router
