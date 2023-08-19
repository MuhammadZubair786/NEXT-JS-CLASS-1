import { NextResponse } from "next/server";
import {userdata} from '../user/db'

export async function POST(request){

    let {data} = await  request.json()

    let maindata = []

    // let checkcourse = userdata.filter((v,i)=>v.course.toLowerCase().includes(data))
    console.log("***********")

    for(var i of userdata){
        // console.log(i["course"].toLowerCase().includes(data.toLowerCase()))
        if(i["course"].toLowerCase().includes(data.toLowerCase()) 
        ||
        i["name"].toLowerCase().includes(data.toLowerCase())
        ){
            // console.log(i)
            maindata.push(i)
        }
    }
    if(maindata.length== 0){
        return NextResponse.json({
            message:"not get data"    })
    }
    else{
        return NextResponse.json({
            message:" get data" ,
            data:maindata
        
        })
    }



   
}