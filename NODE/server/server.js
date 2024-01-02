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


// const http = require('http');
// const url = require('url');
// const port = 3000;
// const fs = require('fs');
// // const queryString = require('queryString');

//  const server = http.createServer((req,res)=>{
//   console.log("url :",req.url);
//   const parsed_url = url.parse(req.url);
//   console.log("parsed url:",parsed_url);

//   if(parsed_url.pathname ==='/'){
//     res.writeHead(200,{'content-type':'text/html'});
//     res.end(fs.readFileSync('../client/index.html'));

//   }
// if(req.method === "POST" && parsed_url.pathname === "/submit"){
//   console.log("form submitted ...");
//   res.writeHead(200,{'constent-type':'text/plain'});
//   res.end("form submitted successfully");
// }
//  });
//  server.listen(port,()=>{
//   console.log(`server running at http://127.0.0.1:${port}`)
//  }) 

/* ------------------------------------------------------------------- */
const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs');
const queryString = require('queryString');
const { MongoClient } = require('mongodb');

 const server = http.createServer((req,res)=>{
  console.log("url :",req.url);
  const parsed_url = url.parse(req.url);
  console.log("parsed url:",parsed_url);

  if(parsed_url.pathname ==='/'){
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fs.readFileSync('../client/index.html'));
  }else if(parsed_url.pathname === '/style.css'){
    res.writeHead(200,{"content-Type":"text/css"});
    res.end(fs.readFileSync("../client/style.css"));
  }
if(req.method === "POST" && parsed_url.pathname === "/submit"){
  console.log("form submitted ...");
 
  let body ='';

  //collect data as it comes in chunks
  req.on('data',(chunck)=>{
    console.log("chunk tostring() :",chunck.tostring());
    body+=chunck.tostring();
    console.log("body :",body);
  })
  //process the formdata on end of the req

  req.on('end',async () =>{
    const formData = queryString.parse(body);
    console.log("formData :",formData);
    

    //do something with submitted data
    console.log("name :",formData.name);
    console.log("email :",formData.email);
    console.log("password",formData.password);
    
  })

  //save to a database
  Collection.insertOne(formData)
  .then((message) =>{
    console.log("document save successfully");
    console.log("message",message);
  })
  .catch((error) =>{
    console.log("Document not inserted");
    console.log("database insertion error :",error);
  })

}
 });

 async function connect(){
  await client.connect()
  .then((message) =>{
    console.log("Database connection established");
  })
  .catch((error) =>{
    console.log("Database connection error :",error);
  })
  .finally(()=>{
    server.listen(port,()=>{
      console.log(`server running at http://127.0.0.1:${port}`)
     }); 

  })
 }
 connect();