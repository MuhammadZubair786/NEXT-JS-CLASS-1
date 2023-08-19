import { NextResponse } from "next/server"
import {userdata} from '../user/db'

//search user
export async function POST(request){
    let {course,name} = await request.json() //get data from body
    console.log( course)
    if(!course){
        return NextResponse.json({
            data:`course required`,
            status:false
        })
    }
    else{

        // userdata.map((v,i)=>{if(v.name.includes("akb")){console.log(v)}})

        let getdata  =  userdata.filter((v,i)=> v.course.toLowerCase() == course.toLowerCase()
        &&
        v.name.toLowerCase() == name.toLowerCase()
        
        
        )
        //filter []s
        console.log(getdata)
        if(getdata.length>0){

            return NextResponse.json({
                data:getdata,
                status:true,
                title:"fetch",
               

            })
        }
        else{
            return NextResponse.json({
                data:"No data Found",
                status:false
            })
        }

        // return NextResponse.json({
        //             data:"Not Find",
        //             status:false
        //         })

       
        
    }
    
   

}