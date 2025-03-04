const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')

const app = express()
app.use(bodyParser.json())

const PORT = 4001
const commentsByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
  // res.send(posts)
})

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex')
  const { content } = req.body
  const comments = commentsByPostId[req.params.id] || []
  comments.push({ id: commentId, content })
  commentsByPostId[req.params.id] = comments
  res.status(201).send(comments)
})

app.listen(PORT, () => {
  console.log(`COMMENTS SERVICE is listening on Port ${PORT}`)
})