//models
const OrderModel = require('../models/OrderModel')


//create
// module.exports.orderPayment = async (req, res, next)=>{
//     if(req.body.orderItems.length === 0){
//         res.status(400).json({message: 'Cart is empty'})
//     }
//     else{
//         const data = await OrderModel.create({
//             orderItems: req.body.orderItems,
//             shippingData: req.body.shippingData,
//             paymentMethod: req.body.paymentMethod,
//             totalPrice: req.body.totalPrice,
//         })
//         res.status(201).json({message: 'New Order created'}, data)
//     }


// }

module.exports.createOrder = async (req, res, next)=>{
    try {
        const data = await OrderModel.create(req.body)
        res.status(201).json({data, message: 'New order created'})
    }
    catch (error) {
        res.status(409).json(error)
    }
}
module.exports.getOrderList = async (req, res, next)=>{
    try {
        const data = await OrderModel.find({})
        res.status(200).json(data)
    }
    catch (error) {
        res.status(404).json({message: error.message})
    }
}