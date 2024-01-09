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
const queryString = require('querystring');
const { MongoClient, ObjectId } = require('mongodb');

const client = new MongoClient("mongodb://127.0.0.1:27017");




 const server = http.createServer(async(req,res)=>{

  //access database and collection
  const db = client.db("Newusers");
  const collection = db.collection("users_coll");

  console.log("url :",req.url);
  const parsed_url = url.parse(req.url);
  console.log("parsed url:",parsed_url);

  if(parsed_url.pathname ==='/'){
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fs.readFileSync('../client/index.html'));
  }else if(parsed_url.pathname === '/client/style.css'){
    res.writeHead(200,{"content-Type":"text/css"});
    res.end(fs.readFileSync("../client/style.css"));

    
  }else if(parsed_url.pathname ==='/client/add_user.html'){
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fs.readFileSync('../client/add_user.html')); 
  }else if(parsed_url.pathname ==='/client/get_user.html'){
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fs.readFileSync('../client/get_user.html')); 
  }else if(parsed_url.pathname ==='/client/script.js'){
    res.writeHead(200,{'content-type':'text/javascript'});
    res.end(fs.readFileSync('../client/script.js')); 
  }   


if(req.method === "POST" && parsed_url.pathname === "/submit"){
  console.log("form submitted ...");
 
  let body ='';

  //collect data as it comes in chunks
  req.on('data',(chunk)=>{
    console.log("chunk:",chunk)
    console.log("chunk tostring() :",chunk.toString());
    body+=chunk.toString();
    console.log("body :",body);
  })
  //process the formdata on end of the req

  req.on('end',async () =>{
    // try {
      
   
    const formData = queryString.parse(body);
    console.log("formData :",formData);
    

    //do something with submitted data
    console.log("name :",formData.name);
    console.log("email :",formData.email);
    console.log("password",formData.password);

      //save to a database
  // await 
  collection.insertOne(formData)
  .then((message) =>{
    console.log("document save successfully");
    console.log("message",message);
  })
  .catch((error) =>{
    console.log("Document not inserted");
    console.log("database insertion error :",error);
  })

  // } catch (error) {
  //   console.log("error")
      
  // }
  res.writeHead(200,{'content-type' : 'text/plain'});
  res.end("form submitted.....")
    
  });
}

    //handle get request to get user details
    if(req.method === "GET" && parsed_url.pathname === "/getData"){
      let data = await collection.find().toArray();
      console.log("data :",data);

      let json_data = JSON.stringify(data);
      console.log("json_data :",json_data);

      res.writeHead(200,{"Content-Type" : "text/json"});
      res.end(json_data);
    }
    if(req.method === "PUT" && parsed_url.pathname === "/editData"){
      let body ="";
      req.on('data',(chunks)=>{
        console.log("chunks :",chunks);
        body = body + chunks.toString();
        console.log("body ;",body);
        
      });
      req.on('end',async ()=>{
        console.log("body :",body);
        let data=JSON.parse(body);
        let id=data.id;
        console.log("id :",id);
        console.log("typeof(id) :",typeof(id));
        let _id=new ObjectId(id);
        console.log("_id :",_id);
        console.log("typeof(_id) :",typeof(_id));
        let updateDatas ={
          name :data.name,
          email : data.email,
          password : data.password,

        }
        await collection.updateOne({_id},{$set : updateDatas})
        .then((message)=>{
          console.log("Document updated...:",message);
          res.writeHead(200,{"Content-Type" : "text/plain"});
          res.end("updated successfully");
        })
        .catch((error)=>{
          console.log("Document not updated :",error);
          res.writeHead(400,{"Content-Type" : "text/plain"});
          res.end("updation failed");
        })
      })
    }

     if(req.method === "DELETE" && parsed_url.pathname === "/deleteData"){
      console.log("Reached delete route");

      let body ="";
      req.on('data',(chunks)=>{
        console.log("Chunks",chunks);
        body = body + chunks.toString();
        console.log("body :",body);

      });
      req.on('end',async ()=>{
        let _id= new ObjectId(body);
        await collection.deleteOne({_id})
        .then((message) =>{
          console.log("Deletion Successful");
          res.writeHead(200,{"Content-Type" : "text/plain"});
          res.end("success");
        })
        .catch((error) =>{
          console.log("deletion failed");
          res.writeHead(200,{"Content-Type" : "text/plain"});
          res.end("failed")
        })
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