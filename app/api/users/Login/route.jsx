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
        if (checkuser.password == data.password) {
            return NextResponse.json({
                message: "User Login",
                data: checkuser
            })
        }
        else {
            return NextResponse.json({
                message: "password incorrect",
                data: []
            })
        }

    }
    else {

        return NextResponse.json({
            message: "Not found User",
            data: []
        })
    }
}