import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectLink } from '../../../lib/db'
import { ResturantModel } from '../../../lib/Model/resutratSchema'

export async function GET() {

    await mongoose.connect(ConnectLink).then((val) => {
        console.log("test connect")
    })

    let res = await ResturantModel.find({})

    return NextResponse.json({
        data: res,
        message: "GET aLL RES"
    })

}