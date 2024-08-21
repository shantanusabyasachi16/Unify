import mongoose from "mongoose";
import { genSalt } from "bcrypt";

const UserSchema = new mongoose.Schema({
    email:{
        type: string,
        required: [true, "Email is Required"],
        unique: true,
    },
    password:{
        type: string,
        required: [true, "Password is Required"],
    },
    firtsname:{
        type: string,
        required: false,
    },
    lastname:{
        type: string,
        required: false,
    },
    image:{
        type: string,
        required: false, 
    },
    colors:{
        type: Number,
        required:false,
    },
    profilesetup:{
        type: Boolean,
        required:false,
    },
})
/*Pre-save Middleware Trigger: Before saving the document, the middleware is triggered.
Salt Generation: A unique salt is generated.
Password Hashing: The plaintext password is hashed using the generated salt.
Save Operation Continues: The next() function is called to proceed with saving the hashed password to the database.*/

UserSchema.pre("save",async function(next){
    const salt = await genSalt();
    this.password = await hash(this.password,salt);
    next();
}) ;


export const user = mongoose.model("users",UserSchema);
      