const jwt = require('jsonwebtoken')

//------------------------------------
// ERROR HANDLER
//------------------------------------
module.exports.handleErrors = (error) => {
    
    let errors = { email: '', password: '' }

    // signup duplicate error
    if(error.code === 11000){
        errors.email = 'Email already exists'
        return errors
    }

    // signup errors
    if (error.message.includes('users validation failed')) {
        if(error.errors.email) {
            errors.email = error.errors.email.properties.message
        }
        if(error.errors.password){
            errors.password = error.errors.password.properties.message
        }
    }

    // login errors
    if(error.message === 'empty field'){
        errors.email = 'Enter an email'
        errors.password = 'Enter a password'
    }
    if(error.message === 'enter email'){
        errors.email = 'Enter an email'
    }
    if(error.message === 'enter password'){
        errors.password = 'Enter a password'
    }
    if(error.message === 'not registered'){
        errors.email = 'Account does not exists'
    }
    if(error.message === 'authentication failed'){
        errors.password = 'Some of your information isn\'t correct. Please try again'
    }

    
    return errors
}

//------------------------------------
// CREATE TOKENS
//------------------------------------
module.exports.createToken = (userId) => {
    return jwt.sign(
        {userId}, 
        process.env.JWT, 
        { expiresIn: 3 * 24 * 60 * 60 }
    )
}
