const http = require('http')
// const queryString = require('querystring')

// const server = http.createServer((req, res) => {
//     console.log(req.method)
//     const url = req.url
//     req.query = queryString.parse(url.split('?')[1])
//     res.end(
//         JSON.stringify(req.query)
//     )
// })
const server = http.createServer((req, res) => {
    if(req.method == 'POST') {
        // req 数据格式
        console.log('req content-type', req.headers['content-type'])
        // 接收数据
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString() // chunk本身是二进制格式
        })
        req.on('end', () => {
            console.log('postData: ', postData)
            res.end('hello world !') 
        })
    }
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