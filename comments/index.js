const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')

const app = express()
app.use(bodyParser.json())

// const posts = {}

app.get('/posts/:id/comments', (req, res) => {
  // res.send(posts)
})

app.post('/posts/:id/comments', (req, res) => {
  // const id = randomBytes(4).toString('hex')
  // const  { title } = req.body

  // posts[id] = {
    // id, title
  // }

  // res.send(201).send(posts[id])
})

app.listen(4001, () => {
  console.log('Comments Server - Listening on 4001')
})