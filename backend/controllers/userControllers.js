
import  User  from "../Models/userModels";


export const Signup = async(request,response, next)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password);
        return response.status(400).json({
            message: "Email and Password is required",
            success: false
        });
        //create a new user
        const user = await User.create({email,password})
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Server error", success: false });
    }
};