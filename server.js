import http from 'http'
const PORT = 5000

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    // res.write('Hi there')

    res.writeHead(200, { 'Content-Type' : 'text/html' })

    res.end('<h1>Hello There!!!')
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 