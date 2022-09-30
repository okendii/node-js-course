//*Some of the node core modules: http, https, fs, path, os;

//?--> HTTP MODULE
const http = require("http");

//!--> setHeader percakton cfar lloji te dhenash do derdojme ne client side
//!--> The writable.write method writes some data to the stream, and calls the supplied callback once the data has been fully handled.
//!--> end, no more data will be written to the Writable

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello from my node js server</h1>");
  res.end();
});

server.listen(3000);
