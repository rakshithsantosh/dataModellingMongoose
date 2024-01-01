import mongoose from "mongoose";

const TodoScheme = new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,
        },
        complete:{
            type:Boolean,
            default:false
        },
        createdBy:{
            //taking reference from another model
            type:mongoose.Scheme.Types.ObjectId,
            ref:"User"
        },
        subTodos:[
            {
            type:mongoose.Scheme.Types.ObjectId,
            ref:"SubTodo"
            }
        ] //array of sub todos
    },
    {
        timestamps:true
    }
)

export const Todo = mongoose.model('Todo',TodoScheme)