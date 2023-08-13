"use client"
import { useEffect, useState } from "react"

export default function UserType({params}){
    console.log(params)

    const teacherdata = [
        {
            name:"Omer",
            course :"CCo"
        },
        {
            name:"Masroor",
            course :"GD"
        },
        {
            name:"zUBAIR",
            course :"PATA NHI"
        }
]

const sTUDENTdATA  = [
    {
        name:"ALI RAZA",
        course :"CCo"
    },
    {
        name:"SHIRAZ",
        course :"GD"
    },
    {
        name:" NABEEL",
        course :"PATA NHI"
    }
]

let [data,setdata]=useState([])

useEffect(()=>{
    if(params.usertypeid=="teacher"){
        setdata(teacherdata)
    }
    else{
        setdata(sTUDENTdATA)

    }
},[])
    return(
        <>
        <h1>User Type </h1>
        {
            data.map((v,i)=>{
                return(
                    <>

                    <h1>
                        
                     {params.usertypeid=="teacher"?
                    "Teacher":
                    "Student" 
                    }   Name : {v.name}</h1> course name {v.course}
                </>
                )
            })
        }
        {/* <b>Teacher</b>
        <br/>
        <b>Student </b> */}
        </>
    )
}