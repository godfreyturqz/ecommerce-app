const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    userId : {type: String, required: true},
    orderItems: [{
        productId: {type: String, required: true},
        mainCategory: {type: String, required: true},
        subCategory: {type: String, required: true},
        brand: {type: String, required: true},
        name: {type: String, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true}
    }],
    shippingData: {
        fullName: {type: String, required: true},
        address: {type: String, required: true}
    },
    totalPrice: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        default: 'Pending'
    },
    deliveryStatus: {
        type: String,
        default: 'On process'
    },
    orderDate : {
        type: Date,
        default: Date.now
    }
})

const OrderModel = mongoose.model('orders', orderSchema)

module.exports = OrderModel