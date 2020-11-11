const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')
const path = require('path')

const app = express()

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

//routes
app.use('/api', require('./routes/api'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch(error => console.log(error.message))