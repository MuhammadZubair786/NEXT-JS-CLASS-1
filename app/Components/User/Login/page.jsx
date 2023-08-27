"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'


function SignUp() {

    const route = useRouter()

    let [user, setuser] = useState({
        email: "",
        password: "",
      
    })

    const handleChange = (e) => {
        // console.log(e.target.name)
        setuser({ ...user, [e.target.name]: e.target.value })


    }

    const submit = () => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/users/Login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: user
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert(response.data.message)
                localStorage.setItem("user_id",response.data.data._id)
                route.push("/Components/Resutarants/Home")

            })
            .catch((error) => {
                console.log(error);
            });

    }



    return (
        <>
            <h1>test</h1>
          
            <Input
                handleChange={handleChange}
                type="email" placeholder={"Enter Email"} value={user.email} name="email" />
            <Input
                handleChange={handleChange}
                type="password" placeholder={"Enter Password"} value={user.password} name="password" />
           

            <button className='border-2' onClick={()=>submit()}>Login</button>

        </>

    )
}

export const Input = ({ type, placeholder, value, name, handleChange }) => {
    return (
        <input className='border-2 '
            value={value}
            onChange={(e) => handleChange(e)}
            type={type} placeholder={placeholder} name={name} />
    )
}



export default SignUp