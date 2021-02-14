require('dotenv/config')
const app = require('express')()
const mongoose = require('mongoose')
// const path = require('path')

const middlewares = require('./middlewares')

//--------------------------------------------------------------
// MIDDLEWARES
//--------------------------------------------------------------
app.use(...middlewares)

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
app.use('/api/v1', require('./routes/api'))

//--------------------------------------------------------------
// PRODUCTION
//--------------------------------------------------------------
// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
//     app.get('*', (req, res)=> {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })
// }
