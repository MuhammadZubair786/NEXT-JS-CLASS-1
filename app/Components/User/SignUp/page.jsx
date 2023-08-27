"use client"
import React, { useState } from 'react'
import axios from 'axios'


function SignUp() {

    let [user, setuser] = useState({
        email: "",
        password: "",
        name: "",
        number: ""
    })

    const handleChange = (e) => {
        // console.log(e.target.name)
        setuser({ ...user, [e.target.name]: e.target.value })


    }

    const submit = () => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/users/SignUp',
            headers: {
                'Content-Type': 'application/json'
            },
            data: user
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert(response.data.message)
            })
            .catch((error) => {
                console.log(error);
            });

    }



    return (
        <>
            <h1>test</h1>
            <Input type="text"
                handleChange={handleChange}
                placeholder={"Enter Name"} value={user.name}
                name="name" />
            <Input
                handleChange={handleChange}
                type="email" placeholder={"Enter Email"} value={user.email} name="email" />
            <Input
                handleChange={handleChange}
                type="password" placeholder={"Enter Password"} value={user.password} name="password" />
            <Input
                handleChange={handleChange}
                type="number" placeholder={"Enter Number"} value={user.number} name="number" />

            <button className='border-2' onClick={()=>submit()}>Create Account</button>

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