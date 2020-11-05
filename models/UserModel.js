const mongoose = require('mongoose')
const Schema = mongoose.Schema
const isEmail = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'enter an email'], 
        unique: true, 
        validate: [isEmail, 'enter a valid email address']
    },
    password: {
        type: String, 
        required: [true, 'enter a password'], 
        minlength: [6, 'more than 6']
    }
})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const UserModel = mongoose.model('users', userSchema)
 
module.exports = UserModel