const express = require('express')
const router = express.Router()
const UserModel = require('./../models/User')
const getToken = require('../util')

router.post('/', async (req, res)=> {
    const signinUser = await UserModel.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if(signinUser){
        res.json({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
    }else{
        res.status(401).json({ message: 'Invalid email or Password'})
    }
})