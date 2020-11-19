const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken')

// #######################################################################
// USER CONTROLLER
// #######################################################################

//------------------------------------
// SIGNUP SIGNUP SIGNUP
//------------------------------------
module.exports.userSignup = async (req, res)=> {
    try {
        const data = await UserModel.create(req.body)
        const token = createToken(data._id)
        res.cookie('jwt', token, { secure: true, httpOnly: true, maxAge: 259200000})
        res.status(201).json({data: data._id})

    } catch (error) {
        const errors = handleErrors(error)
        res.status(400).json({message: 'user not created', errors})
    }
} 

//------------------------------------
// LOGIN LOGIN LOGIN
//------------------------------------
module.exports.userLogin = async (req, res)=> {
    try {
        const user = await UserModel.login(req.body)
        const token = createToken(user._id)
        res.cookie('jwt', token, { secure: true, httpOnly: true, maxAge: 259200000})
        res.status(200).json({user: user._id})

    } catch (error) {
        const errors = handleErrors(error)
        res.status(400).json({message: 'login error', errors})
    }
}

// #######################################################################
// FUNCTIONS
// #######################################################################

//------------------------------------
// ERROR HANDLER
//------------------------------------

const handleErrors = error => {
    console.log(error.message)
    let errors = { email: '', password: '' }

    // duplicate error
    if(error.code === 11000){
        errors.email = 'Email already exists'
    }

    // validation errors
    if(error.message.includes('users validation failed')){
        Object.values(error.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    }

    // login errors
    if(error.message == 'incorrect email'){
        errors.email = 'Email is not registered'
    }
    if(error.message == 'incorrect password'){
        errors.password = 'Password is incorrect'
    }

    return errors
}

//------------------------------------
// CREATE TOKENS
//------------------------------------

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT , {
        expiresIn: 3 * 24 * 60 * 60
    })
}


