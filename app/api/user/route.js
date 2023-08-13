
import { user } from './db'
import { NextRequest, NextResponse } from "next/server";

export async function GET() {

    let data = user;
    console.log(user)
    return NextResponse.json({
        data: data,
        message: "get all User",

    }, {
        status: 200,
        statusText:"Get"
    })



}