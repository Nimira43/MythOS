const express = require('express')
const app = express()
const PORT = 4000

const posts = {}

app.get('/posts', (req, res) => {

})

app.post('/posts', (req, res) => {

})

app.listen(4000, () => {
  console.log(`POSTS SERVICE is listening on Port ${PORT}`)
})