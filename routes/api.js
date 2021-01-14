const router = require('express').Router()
//controllers
const authController = require('../controllers/authController')
const imageController = require('../controllers/imageController')
const orderController = require('../controllers/orderController')
const paymentController = require('../controllers/paymentController')
const productController = require('../controllers/productController')

//********************************************************************
// ROUTES FOR /api/v1...
//********************************************************************

//.............................................
// PRODUCTS RELATED
//.............................................
router.route('/products')
    .get(productController.getProductList)
    .post(productController.createProduct)

router.route('/products/:id')
    .get(productController.getProductDetails)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct)

router.post('/upload', imageController.uploadImage)
// router.post('/destroy', imageController.destroyImage)

//.............................................
// USERS RELATED
//.............................................
router.route('/signup')
    .get(authController.getUsers)
    .post(authController.createUser)

router.post('/login', authController.loginUser)
router.get('/logout', authController.logoutUser)
router.get('/isAuth', authController.isAuth)

//.............................................
// ORDERS RELATED
//.............................................
router.route('/orders')
    .get(orderController.getOrderList)
    .post(orderController.createOrder)

router.route('/orders/:id')
    .get(orderController.getOrderDetails)
    .put(orderController.updateOrder)
    .delete(orderController.deleteOrder)

router.route('/orders/user/:id')
    .get(orderController.getUserOrders)

//.............................................
// PAYMENT RELATED
//.............................................
router.post('/payment/paypal/create' , paymentController.createPayment)
router.post('/payment/paypal/execute', paymentController.setIsPaid)

module.exports = router
