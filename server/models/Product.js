const mongoose = require('mongoose')
// import mongoose from "mongoose";
const Schema = mongoose.Schema

const categorySchema = mongoose.Schema({
    main: {
        type: String
    },
    sub: {
        type: String
    }
})

const productSchema = new Schema({
    category: categorySchema,
    name: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    stockCount: {
        type: Number
    }
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel


// {
//     "category": {
//         "main": "road",
//         "sub": "race"
//     },
//     "name": "CAAD Optimo",
//     "image": "./../images/bike.png",
//     "price": "499"
// }