const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderItems: [{
        name: {type: String},
        quantity: {type: Number},
        image: {type: String},
        price: {type: Number}
    }],
    shippingData: {
        fullName: {type: String},
        address: {type: String}
    },
    paymentMethod: {type: String},
    totalPrice: {type: Number}
})

const OrderModel = mongoose.model('orders', orderSchema)

module.exports = OrderModel
