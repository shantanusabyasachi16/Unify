import express from "express"
import { sendMessage } from "../controllers/chatControllers.js";




const Router = express.Router();

Router.post("/send/:id",sendMessage )



export default Router;