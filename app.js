const handleBlogRouter = require('./src/router/blog')
const handleUserRouter  = require('./src/router/user')

// nodemon监测文件变化，自动重启node
// 使用cross-env设置环境变量，兼容mac linux和windows

const serverHandle = (req, res) => {
   // 设置返回格式 JSON
   res.setHeader('Content-type', 'application/json')
   const url = req.url
   req.path = url.split('?')[0]


   // 处理 blog 路由
   const blogData = handleBlogRouter(req, res)
   if (blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return 
   }

   // 处理 user 路由
   const  userData = handleUserRouter(req, res)
   if (userData) {
       res.end(
           JSON.stringify(userData)
       )
       return
   }

   // 未命中路由，返回 404
   res.writeHead(404, {'Content-type': 'text/plain'})
   res.write("404 not found\n")
   res.end()
}

module.exports = serverHandle
