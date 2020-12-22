const express = require('express')
const compression = require('compression')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')
const path = require('path')
const cookieParser = require('cookie-parser')
const fileupload = require('express-fileupload')

const app = express()

//--------------------------------------------------------------
// MIDDLEWARES
//--------------------------------------------------------------
app.use(express.json({limit: "10mb", extended: true}))
app.use(express.urlencoded({limit: "10mb", extended: true}))
app.use(cors())
app.use(compression())
app.use(cookieParser())
app.use(fileupload({useTempFiles : true}))

//--------------------------------------------------------------
// DATABASE CONNECTION
//--------------------------------------------------------------
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch(error => console.log(error.message))

//--------------------------------------------------------------
// ROUTES
//--------------------------------------------------------------
app.use('/api', require('./routes/api'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
