import React, { Component } from 'react'
import './style.css'
class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            phone: "",
            password: ""
        }

    }
    changeName(event) {
        this.setState({
            name: event.target.value
        })
    }
    changeName(event) {
        this.setState({
            name: event.target.value
        })
    }
    changePhone(event) {
        this.setState({
            phone: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }


    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="fullName" className="label-name"> Full Name</label>
                        <input type="text" className="form-control" onChange={this.changeName}
                            placeholder="Enter Your Full Name" name="name" value={this.state.name} required />
                    </div>
                    <div class="form-group">
                        <label for="email" className="label-name">Email address</label>
                        <input type="email" className="form-control" onChange={this.changeEmail}
                            placeholder="Enter Your Email Address" name="email" value={this.state.email} required />
                    </div>
                    <div class="form-group">
                        <label for="mobileNumber" className="label-name">Mobile Number</label>
                        <input type="text" className="form-control" onChange={this.changePhone}
                            placeholder="Enter Your Phone Number" name="phone" value={this.state.phone} required />
                    </div>
                    <div class="form-group">
                        <label for="password" className="label-name">Password</label>
                        <input type="password" className="form-control" onChange={this.changePassword}
                            placeholder="Enter your Passwordr" name="password" value={this.state.password} required />
                    </div>
                    <div class="form-group">
                        <label for="confirmPass">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Enter Your Full Name" />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        )
    }
}

export default Register