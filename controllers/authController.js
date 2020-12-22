const UserModel = require('../models/UserModel')
const utils = require('../utils')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//------------------------------------
// SIGNUP
//------------------------------------
module.exports.createUser = async (req, res)=> {
    try {
        const userData = await UserModel.create(req.body)
        const token = utils.createToken(userData._id)
        res.cookie('jwt', token, { secure: true, httpOnly: true, maxAge: 259200000})
        res.status(201).json({userId: userData._id})

    } catch (error) {
        const errors = utils.handleErrors(error)
        res.status(400).json({message: 'user not created', errors})
    }
} 

//------------------------------------
// GET ALL USERS
//------------------------------------
module.exports.getUsers = async (req,res) => {
    const data = await UserModel.find().lean()
    res.json(data)
}

//------------------------------------
// LOGIN
//------------------------------------
module.exports.loginUser = async (req,res) => {

    const email = req.body.email
    const password = req.body.password

    try {
        if(!email && !password) throw Error('empty field')
        if(!email) throw Error('enter email')
        if(!password) throw Error('enter password')

        const userData = await UserModel.findOne({email})
        if(userData === null) throw Error('not registered')

        const isAuth = await bcrypt.compare(password, userData.password)

        if(isAuth) {
            const token = utils.createToken(userData._id)
            res.cookie('jwt', token, { secure: true, httpOnly:true, maxAge: 86400000 })
            res.status(200).json({userId: userData._id})
        } else {
            throw Error('authentication failed')
        }

    } catch (error) {
        const errors = utils.handleErrors(error)
        res.status(400).json({message: 'login failed', errors})
    }
}

//------------------------------------
// LOGOUT
//------------------------------------
module.exports.logoutUser = (req, res) => {
    res.cookie('jwt', '', { secure: true, httpOnly:true, maxAge: 1 }).send()
}

//------------------------------------
// ROUTE AUTHENTICATION
//------------------------------------
module.exports.isAuth = (req,res)=>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, process.env.JWT, (error, decodedToken) => {
            if (error) return res.sendStatus(403)
            // decodedToken returns userId
            res.status(200).json(decodedToken)
        })
    } else {
        res.status(401).json({message: 'Not Authenticated'})
    }
}
