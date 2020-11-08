const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({ 
    mainCategory: { type: String, required: true },
    subCategory: { type: String, required: true },
    brand: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    stockCount: { type: Number, required: true },
    created: { type: Date, default: Date.now }
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel