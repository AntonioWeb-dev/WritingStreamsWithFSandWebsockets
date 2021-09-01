# Writing Streams With fs and Websockets
  This code it is a simple example of how could write a file through streams and websockets

# How this code work
  <strong>First</strong>: Create a server using express and the module http, then create new instance of websockets to create a real-time server.<br/>
  <strong>Second</strong>: Create a readStream on the server-side and a writeStream on the client-side, both are streams from text.txt.<br/>
  <strong>Third</strong>: Join websockets with the readStream, the readStreams will not read all the file at once, so the data that will be sent through the websocket is chunks of the file text.txt.
  
# How run the code
  steps: 
  
    git clone https://github.com/AntonioWeb-dev/WritingStreamsWithFSandWebsockets
    cd WritingStreamsWithFSandWebsockets
    npm i
    node index.js (to start the server)
    node client.js (to start the client)
    
  
