const io = require('socket.io-client');
const socket = io('http://localhost:3000');
const fs = require('fs');

// create a dir 'Client'
fs.mkdirSync('Client');
// create a file and start a stream from file text.txt
const writer = fs.createWriteStream('Client/text.txt');

// write the chunk received in the file using streams
socket.on('data', (chunk) => {
  writer.write(chunk);
});
socket.on('end', (msg) => {
  console.log(msg);
});


