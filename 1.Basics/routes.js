//? STREAMING
//! Use use straming to handle and manipulate data like videos, large files etc
//! There are 4 types of streams: Readable streams, Writable streams...
//!.. Duplex streams(both readable and writable at the same time ),...
//!.. Transform streams(both readable and writable, but the data can be modified when reading or writing on the stream)

//? BUFFERS IN STREAMS
//! A buffer is a temporary memory that a stream takes to hold some data until it is consumed.
//! The data comes in chunks
//! On node a buffer works on "string", "Buffer" and "js object"(but for this is needed extra config)
//! We listen to data in streams with events likde "data" and "end", to do that we have to use the example req.on() function

const fs = require("fs");

const requestHander = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head>Enter a message</head>");
    res.write(
      "<body><form action='/message' method='POST'><input name='message' type='text'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", function (chunk) {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", function () {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (error) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
};

module.exports = {
  handler: requestHander,
};

//*/another way to add them// module.exports.handler = requestHander;
