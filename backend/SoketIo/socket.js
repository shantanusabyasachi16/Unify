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
      credentials: true 
    },
  });
  
const userSocket = {} //userid == socket id
//to start the socket
io.on('connection',(socket)=>{
    console.log('user connected',socket.id);


    const userId = socket.handshake.query.userId
    if (userId != undefined) {
      userSocket[userId] = socket.id;
    }

    io.emit('getOnlineUsers',Object.keys(userSocket));

    socket.on('disconnect', ()=>{
      console.log('user disconnected',socket.id);
      delete userSocket[userId];
      io.emit('getOnlineUsers',Object.keys(userSocket));
  })
    
})

export {app,io,server}