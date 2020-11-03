const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express()

app.use(bodyParser.json({limit: "30mb"}))
// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
app.use('/api/products', require('./routes/products'))

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch(error => console.log(error.message))