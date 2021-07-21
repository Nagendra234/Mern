import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
//import { response } from 'express'
class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            phone: "",
            password: ""
        }
        this.submitForm = this.submitForm.bind(this)

    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }
    submitForm = (event) => {
        event.preventDefault()

        const registered = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.phone
        }
        axios.post('http://localhost:4000/register', registered)
            .then(response => {
                console.log(response.data)
            })

        this.setState({
            name: "",
            email: "",
            phone: "",
            password: ""
        })

    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div class="form-group">
                        <label for="fullName" className="label-name"> Full Name</label>
                        <input type="text" className="form-control" onChange={this.handleChange}
                            placeholder="Enter Your Full Name" name="name" value={this.state.name} required />
                    </div>
                    <div class="form-group">
                        <label for="email" className="label-name">Email address</label>
                        <input type="email" className="form-control" onChange={this.handleChange}
                            placeholder="Enter Your Email Address" name="email" value={this.state.email} required />
                    </div>
                    <div class="form-group">
                        <label for="mobileNumber" className="label-name">Mobile Number</label>
                        <input type="text" className="form-control" onChange={this.handleChange}
                            placeholder="Enter Your Phone Number" name="phone" value={this.state.phone} required />
                    </div>
                    <div class="form-group">
                        <label for="password" className="label-name">Password</label>
                        <input type="password" className="form-control" onChange={this.handleChange}
                            placeholder="Enter your Passwordr" name="password" value={this.state.password} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        )
    }
}

export default Register