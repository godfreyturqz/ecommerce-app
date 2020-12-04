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
router.post('/payment/paypal' , (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/orderStatus",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Mountain bike item",
                    "sku": "item",
                    "price": "900.00",
                    "currency": "USD",
                    "quantity": 2
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "100.00"
            },
            "description": "This is the payment description."
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

router.post('/payment/paypalExecute', (req, res) => {
    const payerId = req.body.PayerID;
    const paymentId = req.body.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "100.00"
            }
        }]
    }
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send('Success');
        }
    })


})

module.exports = router