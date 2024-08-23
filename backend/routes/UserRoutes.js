import express from "express"
import { Signup } from "../controllers/userControllers.js";


const Router = express.Router();

Router.post("/signup",Signup )

export default Router;