import express from "express"
import { login, Signup } from "../controllers/userControllers.js";


const Router = express.Router();

Router.post("/signup",Signup )
Router.post("/login",login )


export default Router;