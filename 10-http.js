const http = require('http');

const server = http.createServer((req,res)=>{
if (req.url==='/') {
    res.end('welcome to home page')
}
if (req.url==='/about') {
    res.end('about section')
}
res.end(`
<h1>ur mom's page</h1>
<a href = "/"></a>
`)
})

server.listen(5000)