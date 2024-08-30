import express from "express"
import { getMessage, sendMessage } from "../controllers/chatControllers.js";
import authenticated from "../middleware/authenticated.js";

const Router = express.Router();

Router.post("/send/:id",authenticated,sendMessage )
Router.get("/:id",authenticated,getMessage)



export default Router;