import express  from "express";
import dotenv from "dotenv";
import cors from "cors";

import cookieParser from "cookie-parser";
import ConnectDb from "./utils/Db.js";
import Router from "./routes/UserRoutes.js";

dotenv.config();
const app = express();
app.use(cors({
    origin:[process.env.ORIGIN],
    methods:["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials:true,
}))

app.use(cookieParser());
app.use(express.json()); //parses incoming requests with JSON payloads.makes it available on req.body

app.use('/api/user',Router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
ConnectDb();
    console.log(`Server running on port ${PORT}`);
  });


