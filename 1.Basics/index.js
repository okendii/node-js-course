//*Some of the node core modules: http, https, fs, path, os;

//*MODULES WE WILL USE HERE
const http = require("http");
const routes = require("./routes");

// we create a server and listen to it on port 3000
const server = http.createServer(routes.handler);

server.listen(3000);
