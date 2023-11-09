require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about breads!')
})

const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

app.listen(PORT)