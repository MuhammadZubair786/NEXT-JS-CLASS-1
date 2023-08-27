import mongoose from "mongoose";

let ResturantSchema = mongoose.Schema({
    title:String,
    description:String,
    imagelink:String,
    location:String,
    rating:Number,
    userid:String
    
   
})

if( mongoose.models["resturant"]){
    delete  mongoose.models["resturant"]

}

export const ResturantModel = mongoose.model("resturant",ResturantSchema)