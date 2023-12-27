// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const name = "soman";
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`hello ${name},Server running at http://${hostname}:${port}/`);
// });


const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs');
const queryString = require('queryString')

 const server = http.createServer((req,res)=>{
  console.log("url :",req.url);
  const parsed_url = url.parse(req.url);
  console.log("parsed url:",parsed_url);

  if(parsed_url.pathname ==='/'){
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fs.readFileSync('../client/index.html'));

  }
if(req.method === "POST" && parsed_url.pathname === "/submit"){
  console.log("form submitted ...");
  res.writeHead(200,{'constent-type':'text/plain'});
  res.end("form submitted successfully");
}
 });
 server.listen(port,()=>{
  console.log(`server running at http://127.0.0.1:${port}`)
 }) 