"use client"
import React, { useEffect, useState } from "react";
import axios from 'axios'

function Home() {

    let [res, setres] = useState([])

    useEffect(() => {

        let userid = localStorage.getItem("user_id")


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/api/Resturant/MyReutrants/${userid}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setres(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])
    return (
        <>

            <h1>My  Resutrant List </h1>
            {
                res.map((v, i) => {
                    return (
                        <div className="border-2 w-1/2 mx-auto">

                            <h1>{v.title}</h1>
                            <img src={v.imagelink} />
                            {v.description != null
                                ?
                                <>
                                    <b>{v.description}</b>
                                    <br />
                                </>
                                :
                                <b></b>
                            }
                            {v.location != null
                                ?
                                <>
                                    <b>{v.location}</b>
                                    <br />
                                </>
                                :
                                <b></b>
                            }
                            {v.rating != null
                                ?
                                <>
                                    <b>{v.rating}</b>
                                    <br />
                                </>
                                :
                                <b></b>
                            }
                            <b>{v.userid}</b>

                        </div>
                    )
                })
            }
        </>
    )
}

export default Home