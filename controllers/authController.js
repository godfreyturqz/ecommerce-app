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
    if(!req.body.email) return res.status(400).json({email: 'Enter an Email'})
    if(!req.body.password) return res.status(400).json({password: 'Enter a password'})

    try {
        const userData = await UserModel.findOne({email: req.body.email})
        if(userData === null) return res.status(400).json({email: 'Account does not exists'})

        const isAuth = await bcrypt.compare(req.body.password, userData.password)
        if(isAuth) {
            const token = utils.createToken(userData._id)
            res.cookie('jwt', token, { secure: true, httpOnly:true, maxAge: 3 * 24 * 60 * 60 * 1000})
            res.status(200).json({userId: userData._id}) 
        }
        else {
            res.status(400).json({password: 'Authentication error'})
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({message: 'login failed', error})
    }
}

//------------------------------------
// LOGOUT
//------------------------------------
module.exports.logout = (req, res) => {
    res.cookie('jwt', '', { secure: true, httpOnly:true, maxAge: 1}).send()
}

// for dev purposes
module.exports.deleteAllUsers = (req, res) => {
    UserModel.deleteMany({}).then((res)=> res.json('success'))
    .catch(err => res.json(err))
}

//------------------------------------
// ROUTE AUTHENTICATION
//------------------------------------
module.exports.requireAuth = (req,res)=>{
    // const token = req.headers.cookie.split('=')[1]
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token, process.env.JWT, (error, decodedToken) => {
            if (error) return res.sendStatus(403)
            // decodedToken returns userId
            res.status(200).json(decodedToken)
            console.log('authentication success')
        })
    }
    else {
        res.status(401).json({message: 'Not Authenticated'})
    }
}