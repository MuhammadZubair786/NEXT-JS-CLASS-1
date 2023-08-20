import mongoose from "mongoose";

let productschema = mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    review:String
})

export const Product= mongoose.model("products",productschema)
