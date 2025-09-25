const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/events', (re, res) => {

})

app.listen(4003, () => {
  console.log('Moderation Server - listening on Port 4003')
})