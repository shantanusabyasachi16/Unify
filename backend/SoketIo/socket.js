import { Server } from "socket.io";
import http from "http";
import express from "express"


const app = express();

// to create the socket server

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: ['http://localhost:5173'],  
      methods: ['GET', 'POST'],
      credentials: true  // Add this to ensure cookies are handled properly if needed
    },
  });
  

//to start the socket
io.on('connection',(socket)=>{
    console.log('user connected',socket.id);
    
})

export {app,io,server}