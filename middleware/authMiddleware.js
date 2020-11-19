const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')


//------------------------------------
// AUTHENTICATE TOKEN
//------------------------------------
module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token, process.env.JWT, (error, decodedToken) => {
            if(error){
                console.log(error.message)
                res.redirect('/login')
            }
            else{
                console.log(decodedToken)
                next()
            }
        })
    }
    else {
        res.redirect('/login')
    }
}

//------------------------------------
// CHECK CURRENT USER
//------------------------------------
module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token, process.env.JWT, async (error, decodedToken) => {
            if(error){
                console.log(error.message)
                res.locals.user = null
                next()
            }
            else{
                console.log(decodedToken)
                const user = await UserModel.findById(decodedToken.id)
                res.locals.user = user
                next()
            }
        })
    }
    else {
        res.locals.user = null
        next()
    }
    
}