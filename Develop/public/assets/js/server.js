//Sets up server
const http = require("http");
const express = require("express");
const app = express();
const PORT = 8080

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log("Stuff be doing")
}

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost: " + 8080);
})