import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './style.css'
//import { response } from 'express'
const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    let Name, value;
    const handleChange = (e) => {
        console.log(e)
        Name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [Name]: value })
    }

    const PostData = (e) => {
        e.preventDefault()
        const registered = {
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: user.password
        }
        axios.post('http://localhost:4500/register', registered)
            .then(response => console.log(response.data))


        window.alert("Successfully Registered")
    }


    return (
        <div>
            <form method="POST">
                <div class="form-group">
                    <label for="fullName" className="label-name"> Full Name</label>
                    <input type="text" className="form-control" onChange={handleChange}
                        placeholder="Enter Your Full Name" name="name" value={user.name} required />
                </div>
                <div class="form-group">
                    <label for="email" className="label-name">Email address</label>
                    <input type="email" className="form-control" onChange={handleChange}
                        placeholder="Enter Your Email Address" name="email" value={user.email} required />
                </div>
                <div class="form-group">
                    <label for="mobileNumber" className="label-name">Mobile Number</label>
                    <input type="text" className="form-control" onChange={handleChange}
                        placeholder="Enter Your Phone Number" name="phone" value={user.phone} required />
                </div>
                <div class="form-group">
                    <label for="password" className="label-name">Password</label>
                    <input type="password" className="form-control" onChange={handleChange}
                        placeholder="Enter your Passwordr" name="password" value={user.password} required />
                </div>
                <button type="submit" className="btn btn-primary" onClick={PostData}>Register</button>
            </form>
        </div>
    )
}


export default Register