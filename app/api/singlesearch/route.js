import { NextResponse } from "next/server"
import {userdata} from '../user/db'

export async function POST(request){

    let {data} = await  request.json()

    let check  = false

    let checkcourse = userdata.filter((v,i)=>v.course.toLowerCase() == data.toLowerCase())

    if(checkcourse.length==0){
        let checkname = userdata.filter((v,i)=>v.name.toLowerCase() == data.toLowerCase())

        console.log(checkname)
        if(checkname.length==0){
            return NextResponse.json({
                message:"Not found",
                status:true
            })
        }
        else{
            return NextResponse.json({
                data:checkname,
                status:true
            })  
        }
    }
    return NextResponse.json({
        data:checkcourse,
        status:true
    })






   
}