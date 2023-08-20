import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { ConnectLink } from '../../lib/db'
import { Product } from '../../lib/Models/product'

export async function GET() {

    await mongoose.connect(ConnectLink).then(async (val) => {
        console.log("connect")
    })

        let data = await Product.find() //all data get 
        console.log(data)
        if (data.length == 0) {
            return NextResponse.json({
                data: data,
                message: "No data"
            })
        }
        else {
            return NextResponse.json({
                data: data,
                message: "data found"
            })
        }
   
   return true

}

export async function POST(request, content) {
    let body = await request.json()
    console.log(body)
    await mongoose.connect(ConnectLink).then((val) => {
        console.log("connect")
    })
    if (!body.name || !body.price) {
        return NextResponse.json({
            data: "required field",
            // message :"data found"
        })

    }
    else {
        let product = Product(body)
        const result = await product.save()

        return NextResponse.json({
            data: result,
            message: "data save"
        })

    }

}

// export async function PUT(request,content){
//     let body = await request.json()
//     console.log(body)
   
// }
