import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { ConnectLink } from '../../../lib/db'
import { Product } from '../../../lib/Models/product'

export async function PUT(request,content) {

    let id = content.params.productid
    console.log(id)

    let body = await request.json()

    await mongoose.connect(ConnectLink).then(async (val) => {
        console.log("connect")
    })



    // let product =await  Product.findByIdAndUpdate(id,body)

    // return NextResponse.json({
    //     message:"save data",
    //     data:product
    // })

    let product =await  Product.fde
}