//model
// const UserModel = require('../models/UserModel')
//dependencies
const bcrypt = require('bcrypt')

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code)
    const asd = {email: '', password: ''}

}

//create
module.exports.userSignup = (req, res)=> {
    res.json('signup')
    const {email, password} = req.body

    // try {
    //     const userInfo = await UserModel.create({email: email, password: password})
    //     res.status(201).json(userInfo)
    // } catch (error) {
    //     const error = handleErrors(error)
    //     res.status(500).json(error)
    // }
} 

//read
module.exports.userLogin = (req, res)=> {
    res.json('login')
    const {email, password} = req.body

    // try {
    //     const userInfo = await UserModel.find({email: email, password: password})
    //     res.status(201).json(userInfo)
    // } catch (error) {
    //     const error = handleErrors(error)
    //     res.status(500).json(error)
    // }
}






























// module.exports.login_post = (req, res)=> {
//     const {email, password} = req.body
// }
// module.exports.signup_post = async(req, res)=> {
//     try {
//         const {name, email, password, isAdmin} = req.body
//         //validation
//         if(!email || !password)
//             return res.status(400).json({message: 'Empty field'})
//         if(password.length < 6)
//             return res.status(400).json({message: 'Password must be at least 6 characters'})
//         const existingUser = await UserModel.find({email: email})
//         if(existingUser)
//             return res.json(400).json({message: 'Account already exists'})
//         if (!name)
//             return name = email
        
//         const salt = await bcrypt.genSalt()
//         const passwordHash = await bcrypt.hash(password, salt)
//         console.log(passwordHash)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }