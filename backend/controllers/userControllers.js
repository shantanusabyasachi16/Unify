import bcrypt from "bcryptjs";
import { User } from "../Models/userModels.js";
import jwt from 'jsonwebtoken'; 

const maxAge = 1 * 24 * 60 * 60 * 1000; // 1 day in milliseconds
const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge });
}

export const Signup = async (request, response, next) => {
    try {
        const { email, password } = request.body;
        if (!email || !password) {
            return response.status(400).json({
                message: "Email and Password are Required",
                success: false
            });
        }
        // Create a new user
        const user = await User.create({ email, password });
        
       
        response.cookie("token", createToken(email, user._id), {
            maxAge,
            secure: true, 
            sameSite: "none" 
        });

        // Return response with user details
        return response.status(201).json({
            user: {
                Id: user._id,
                email: user.email,
                profileSetup: user.profileSetup,
            }
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Server error", success: false });
    }
};


export const login = async (request, response, next) => {
    try {
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({
                message: "Email and Password are Required",
                success: false
            });
        }

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return response.status(404).json({
                message: "User not found",
                success: false
            });
        }

        // Compare the provided password with the hashed password in the database
        const auth = await bcrypt.compare(password, user.password);

        if (!auth) {
            return response.status(400).json({
                message: "Password is incorrect",
                success: false
            });
        }

        // Create and set the authentication token in a cookie
        response.cookie("token", createToken(email, user._id), {
            maxAge: 24 * 60 * 60 * 1000, // Example: 1 day in milliseconds
            secure: true, 
            sameSite: "none"
        });

        // Return the user details along with a success message
        return response.status(200).json({
            success: true,
            user: {
                _id: user._id,  // Use standard MongoDB field name
                email: user.email,
                profileSetup: user.profileSetup,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                colors: user.colors
            },
            message: "Login successful"
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ 
            message: "Server error", 
            success: false 
        });
    }
};
