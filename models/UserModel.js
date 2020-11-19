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
    console.log('new user is signing up...', this)
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// fire a function after save
userSchema.post('save', (doc, next)=> {
    console.log('new user created', doc)
    next()
})

// custom method of UserModel
userSchema.statics.login = async function (data) {
    
    const user = await this.findOne({email: data.email})
    
    if(user){
        const auth = await bcrypt.compare(data.password, user.password)
        if(auth){
            return user
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}

const UserModel = mongoose.model('users', userSchema)
 
module.exports = UserModel