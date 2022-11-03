const http = require('http');
const server = http.createServer(async (req, res) => {

  if (req.url === "/getstatusapi" && req.method === "GET") {
    
      res.writeHead(200, { "Content-Type": "application/json" });

      res.write(JSON.stringify({message:"Welcome to Node JS First API",
      articleData:{
          articleName: "Node Js Knowledge",
          category:"Example of NodeJS ",
          status: "Successfull"
      },
endingMessage:"message ends"  }));
      res.end();
  } 
  

  else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
  }
 
}
);
server.listen(3000)