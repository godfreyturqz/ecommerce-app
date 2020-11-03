const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    mainCategory: { type: String },
    subCategory: { type: String },
    brand: { type: String },
    name: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: Number },
    stockCount: { type: Number }
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel