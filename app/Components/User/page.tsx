"use client"
import { useEffect, useState } from "react"
import axios from "axios"
const User = () => {
    let [users, setuser] = useState([])
    let [inputstate, setinput] = useState("")
    let [username, setusername] = useState("")
    let [secondtime, setsecondtime] = useState(false)

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/user',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data.data);
                if (response.data.status) {
                    setuser(response.data.data)
                    setsecondtime(true)
                }
            })
            .catch((error) => {
                console.log(error);
            });


    }, [])


    // const searchuser = ()=>{
    //     setuser([])
    //     let config = {
    //         method: 'post',
    //         maxBodyLength: Infinity,
    //         url: 'http://localhost:3000/api/searchuser',
    //         headers: { 
    //           'Content-Type': 'application/json'
    //         },
    //         data : {course:inputstate,name : username }
    //       };

    //       axios.request(config)
    //       .then((response) => {
    //         console.log(response.data.data);
    //         setuser(response.data.data)

    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    // }



    // const searchuser = ()=>{
    //     setuser([])
    //     let config = {
    //         method: 'post',
    //         maxBodyLength: Infinity,
    //         url: 'http://localhost:3000/api/singlesearch',
    //         headers: { 
    //           'Content-Type': 'application/json'
    //         },
    //         data : {data: inputstate }
    //       };

    //       axios.request(config)
    //       .then((response) => {
    //         console.log(response.data.data);
    //         setuser(response.data.data)

    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    // }

    useEffect(() => {


        if (secondtime) {

            setuser([])
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/api/searchbyWord',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: { data: inputstate }
            };

            axios.request(config)
                .then((response) => {
                    console.log(response.data.data);
                    if (response.data.data.length != 0) {
                        setuser(response.data.data)
                        console.log("data")

                    }

                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [inputstate])


    return (
        <>

            <h1>User list</h1>
            <div className="w-1/2 mx-auto block">
                <input type="text"
                    value={inputstate}
                    onChange={(e) => setinput(e.target.value)}
                    className="border-2 w-1/2 "
                    placeholder="enter data" />

                {/* <input type="text"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            className="border-2 w-1/2 "
            placeholder="enter name"/> */}

                {/* <button onClick={()=>searchuser()}>Search</button> */}
            </div>

            {
                users.length == 0 ?
                    <h1>Loading ..</h1> :
                    users.map((v, i) => {
                        return (
                            <div className="border-2 mx-auto w-1/2 text-center p-2 m-2">
                                <h1>{v["name"]}</h1>
                                <h1>Course : {v["course"]}</h1>
                                <h1>Age : {v["age"]}</h1>
                            </div>

                        )
                    })
            }
        </>
    )
}

export default User