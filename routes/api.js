const express = require('express')
const router = express.Router()
const paypal = require('paypal-rest-sdk')
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
router.get('/orders/:id', orderController.getOrderDetails)
router.put('/orders/:id', orderController.updateOrder)
router.delete('/orders/:id', orderController.deleteOrder)

//.............................................
// PAYMENT RELATED
//.............................................
paypal.configure({
    'mode': 'sandbox',
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_CLIENT_SECRET
})
router.post('/payment/paypal/create' , (req, res) => {
    
    const orderItems = req.body.orderItems
    const totalPrice = req.body.totalPrice
    const orderId = req.body.orderId

    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": `http://localhost:3000/order/details/${orderId}?totalPrice=${totalPrice}`,
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": orderItems
            },
            "amount": {
                "currency": "USD",
                "total": totalPrice
            },
            "description": "Payment for PremiumBikes."
        }]
    }
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error
        } else {
            const approval_url = payment.links[1].href
            res.json({approval_url})
        }
    });
})

router.post('/payment/paypal/execute', (req, res) => {

    const PayerID = req.body.PayerID
    const paymentId = req.body.paymentId
    const totalPrice = req.body.totalPrice

    const execute_payment_json = {
        "payer_id": PayerID,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": totalPrice
            }
        }]
    }
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            // console.log(JSON.stringify(payment));
            console.log('payment success')
            res.json('Success');
        }
    })

})

module.exports = router