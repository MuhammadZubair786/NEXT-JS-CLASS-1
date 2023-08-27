import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    number:Number
})

if( mongoose.models["users"]){
    delete  mongoose.models["users"]

}

export const USERMODEL = mongoose.model("users",userSchema)
