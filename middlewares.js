const rateLimiter = require('express-rate-limit')
const compression = require('compression')
const fileupload = require('express-fileupload')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const express = require('express')

module.exports = [
    rateLimiter({max: 200, windowMs: 1 * 60 *1000}),
    compression(),
    fileupload({useTempFiles : true}),
    cors(),
    cookieParser(),
    express.json({limit: "10mb", extended: true}),
    express.urlencoded({limit: "10mb", extended: true})
]
