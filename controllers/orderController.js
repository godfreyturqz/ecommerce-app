//models
const OrderModel = require('../models/OrderModel')

//******************************************************************
// CREATE CREATE CREATE >>>>> ORDER
//******************************************************************
module.exports.createOrder = async (req, res, next)=>{
    if(req.body.orderItems.length === 0){
        res.status(400).json({message: 'Cart is empty'})
    }
    else{
        try {
            const data = await OrderModel.create(req.body)
            res.status(201).json({message: 'New order created', orderId: data._id})

        } catch (error) {
            res.status(409).json({message: error.message})
        }
    }
}

//******************************************************************
// GET GET GET >>>>> ORDER
//******************************************************************
module.exports.getOrderList = async (req, res, next)=>{
    try {
        const data = await OrderModel.find({})
        res.status(200).json(data)

    }
    catch (error) {
        res.status(404).json({message: error.message})
    }
}

//******************************************************************
// UPDATE UPDATE UPDATE >>>>> ORDER
//******************************************************************
module.exports.updateOrder = async(req, res, next)=>{
    try {
        const data = await OrderModel.findByIdAndUpdate(req.params.id, req.body)
        .then(()=> OrderModel.findById(req.params.id))
        res.status(200).json({message: 'updated successfully', data: data._id})

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//******************************************************************
// DELETE DELETE DELETE >>>>> ORDER
//******************************************************************
module.exports.deleteOrder = async (req, res, next)=>{
    try {
        const data = await OrderModel.findByIdAndRemove(req.params.id)
        res.status(200).json({message: 'deleted successfully', data: data._id})
        
    }
    catch (error) {
        res.status(404).json({message: error.message})
    }
}