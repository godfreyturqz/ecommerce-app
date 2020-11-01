const express = require('express')

const app = express()

const data = require('./Data')

app.get('/api/products', (req, res)=>{
    res.send(data.products)
})

app.listen(5000)