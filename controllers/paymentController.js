const paypal = require('paypal-rest-sdk')
const OrderModel = require('../models/OrderModel')


paypal.configure({
    'mode': 'sandbox',
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_CLIENT_SECRET
})

module.exports.createPayment = (req, res) => {
    
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
    })

}

module.exports.setIsPaid = (req, res) => {

    const PayerID = req.body.PayerID
    const paymentId = req.body.paymentId
    const totalPrice = req.body.totalPrice
    const orderId = req.body.orderId

    const execute_payment_json = {
        "payer_id": PayerID,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": totalPrice
            }
        }]
    }

    paypal.payment.execute(paymentId, execute_payment_json, async function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            const order = await OrderModel.findById(orderId)
            if(order === null) return
            order.isPaid = true
            const updatedOrder = await order.save()
            res.json({message: 'Order paid', updatedOrder})
            // console.log(JSON.stringify(payment))
        }
    })

}
