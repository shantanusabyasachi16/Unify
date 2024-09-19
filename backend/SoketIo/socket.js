import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

// Create the socket server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"], // Allow frontend access
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const userSocket = {}; // Store userId -> socketId mappings

// Function to get receiver's socket ID
export const getReceiverSocketId = (receiverId) => {
  return userSocket[receiverId];
};

// Start the socket connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  const userId = socket.handshake.query.userId; // Get userId from query parameters
  if (userId) {
    userSocket[userId] = socket.id; // Map userId to socketId
    io.emit("getOnlineUsers", Object.keys(userSocket)); // Notify all clients of online users
  }

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    if (userId && userSocket[userId]) {
      delete userSocket[userId]; // Clean up user from userSocket
      io.emit("getOnlineUsers", Object.keys(userSocket)); // Update online users
    }
  });
});

export { app, io, server };
