const http=require('http');
const server=http.createServer((req,res)=>{
 if (req.url==="/"){
  res.end('This is the home page')
 }
 if (req.url==='/about'){
  res.end("This is the about page")
 }
 res.end(`<h1>Oops!</h1>
 <p>Wrong page buddy</p>
 <a href="/">back home</a>
 `)
})
server.listen(5000)