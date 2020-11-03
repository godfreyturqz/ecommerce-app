const jwt = require('jsonwebtoken')
require('dotenv/config')

const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET, {
        expiresIn: '48h'
    })
}

module.exports = getToken