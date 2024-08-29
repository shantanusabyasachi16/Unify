import express from "express"
import { getOtherUsers, login, logout, register } from "../controllers/userControllers.js";
import authenticated from "../middleware/authenticated.js";


const Router = express.Router();

Router.post("/register",register )
Router.post("/login",login)
Router.get("/logout",logout)
Router.get("/",authenticated,getOtherUsers)


export default Router;