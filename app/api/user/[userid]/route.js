
import { user } from '../db'
import { NextRequest, NextResponse } from "next/server";

export async function GET(request, content) {
    console.log(content.params.userid)

    let data = [];
    user.map((v,i)=>{
        if(v.name==content.params.userid){
            console.log(v)
            data.push(v)
        }
    })
    if(data.length==0){
        return NextResponse.json({
            data: data,
            message: "Not found user",
    
        }, {
            status: 400,
            statusText:"Not found"
        })
    }
    else{
        return NextResponse.json({
            data: data,
            message: "get all User",
    
        }, {
            status: 200,
            statusText:"Get"
        })
    }
    // console.log(user)
    



}