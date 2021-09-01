/**
 * This it is a use websoockets and fs module
 * to desmostrate how can you write chunk in a file sending throughout websockets
 */
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const fs = require("fs");

// Create http server
const app = express();
const server = http.createServer(app);

// Create websockets
const io = new Server(server, {
  cors: '*',
});

// readStream of the file text.txt
const reader = fs.createReadStream('text.txt');

io.on("connect", () => {

  // sending chunks(1mb) while the file is readable
  reader.on('readable', () => {
    while(chunk=reader.read(1000000)) {
      io.emit('data', chunk);
    }
  });
  // when the event 'End' is indicates that the entire file has been sended
  reader.on('end', () => io.emit('end', 'end'));
});

server.listen(3000);