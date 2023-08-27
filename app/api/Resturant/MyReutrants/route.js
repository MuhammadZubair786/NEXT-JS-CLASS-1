import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectLink } from '../../../lib/db'
import { ResturantModel } from '../../../lib/Model/resutratSchema'

export async function POST(request, content) {

    await mongoose.connect(ConnectLink).then((val) => {
        console.log("test connect")
    })

    let body = await request.json()

    if (!body.title || !body.imagelink || !body.userid) {

        return NextResponse.json({
            message: "Missing Required Field"
        })

    }
    else {

        let res = ResturantModel(body)
        await res.save()

        return NextResponse.json({
            message: "add new res",
            data: res
        })


    }


    return NextResponse.json({
        message: "test"
    })
}




