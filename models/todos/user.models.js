import mongoose from "mongoose"

//creating a new schema
const userScheme = new mongoose.Schema(
    {
        /* method one 
        username: String,
        email: String,
        isActive:Boolean*/
        username:{
            type: String,
            required:true,
            unique:true,
            lowercase:true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password:{
            type : String,
            required: [true, 'password is required']
        }
    },
    {
        timestamps:true
    }
)

//export
export const User = mongoose.model("User",userScheme)

//in database its stored as users all lower case and in plural 