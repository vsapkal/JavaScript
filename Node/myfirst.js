let http = require('http');
console.log("Welcome to javascript");

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end('Hello JavaScript');
}).listen(8080);
