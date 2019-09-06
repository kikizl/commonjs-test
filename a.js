const http = require('http')
const queryString = require('querystring')

const server = http.createServer((req, res) => {
    console.log(req.method)
    const url = req.url
    req.query = queryString.parse(url.split('?')[1])
    res.end(
        JSON.stringify(req.query)
    )
})

server.listen(3000, () => {
    console.log('listening on 3000 port')
})

console.log('ok')

// function add(a, b) {
//     return a + b
// }

// function mul(a, b) {
//     return a * b
// }
// module.exports = {
//     add,
//     mul
// }