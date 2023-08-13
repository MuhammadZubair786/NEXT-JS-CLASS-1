"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Students() {
    const [data, setdata] = useState([])

    useEffect(() => {


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/user',
            headers: {}
        };

        axios.request(config)
            .then((response) => {

                console.log(JSON.stringify(response.data));
                setdata(response.data["data"])
            })
            .catch((error) => {
                console.log(error);
            });
    },[])

    return (
        <>

            <h1>Student details</h1>
            {data.map((v, i) => {
                return (
                    <div className="border w-1/2 mx-auto mt-4 text-center text-red-500 border-green-900">
                        <Link href={`/Components/Student/${v.id}`}>

                            {v.name}
                        </Link>
                    </div>
                )
            })}
        </>
    )
}