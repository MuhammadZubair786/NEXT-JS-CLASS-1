import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectLink } from '../../../lib/db'
import { USERMODEL } from '../../../lib/Model/userSchema'


export async function POST(request, content) {

    await mongoose.connect(ConnectLink).then((val) => {
        console.log("test connect")
    })



    let data = await request.json()

    let checkuser = await USERMODEL.findOne({ email: data.email })
    console.log(checkuser)
    if (checkuser != null) {
        return NextResponse.json({
            message: "Already Regsister",
            data: checkuser
        })
    }
    else {
        let res = USERMODEL(data)
        await res.save()
        return NextResponse.json({
            message: "User Regsister",
            data: res
        })
    }
}

export async function GET(){
    // let res = request.json()
    // console.log(res)


    return NextResponse.json({
        message: "Api check",
        data: []
    })
}