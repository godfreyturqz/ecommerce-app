const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    created: {
        type: Date,
        default: Date.now
    }
})

// fire a function before save
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    console.log('new user is signing up...', this)
    next()
})

// fire a function after save
userSchema.post('save', (doc, next)=> {
    console.log('new user created', doc)
    next()
})


const UserModel = mongoose.model('users', userSchema)
 
module.exports = UserModel