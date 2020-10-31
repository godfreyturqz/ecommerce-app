const express = require('express')
const data = require('./Data')

const app = express()

app.get('/api/products', (req, res)=>{
    res.send(data.products)
})

app.listen(5000)