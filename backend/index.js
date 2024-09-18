import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import ConnectDb from "./utils/Db.js";
import userRouter from "./routes/UserRoutes.js";
import messageRoutes from "./routes/messageroutes.js";
import { server, app } from "./SoketIo/socket.js"; 

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parses incoming requests with JSON payloads, makes it available on req.body
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));

app.use('/api/user', userRouter);
app.use('/api/message', messageRoutes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {  // Use server.listen instead of app.listen because socket.io uses the server
  ConnectDb();
  console.log(`Server running on port ${PORT}`);
});
