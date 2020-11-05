const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

const app = express()

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

//routes
app.use('/api', require('./routes/api'))


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch(error => console.log(error.message))