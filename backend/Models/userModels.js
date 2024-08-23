import mongoose from "mongoose";
import { genSalt, hash } from "bcrypt";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    firstName: { 
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    colors: {
        type: Number,
        required: false,
    },
    profileSetup: {
        type: Boolean,
        required: false,
    },
});

// Pre-save middleware for password hashing
UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) { // Only hash if password has been modified or is new
        try {
            const salt = await genSalt();
            this.password = await hash(this.password, salt);
        } catch (error) {
            return next(error); // Pass error to the next middleware
        }
    }
    next();
});

export const User = mongoose.model("User", UserSchema); // Named export
