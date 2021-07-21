import React, { Component } from 'react'
import './style.css'
class Register extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="fullName" className="label-name"> Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter Your Full Name" />
                    </div>
                    <div class="form-group">
                        <label for="email" className="label-name">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter Your Full Name" />
                    </div>
                    <div class="form-group">
                        <label for="mobileNumber" className="label-name">Mobile Number</label>
                        <input type="text" className="form-control" placeholder="Enter Your Full Name" />
                    </div>
                    <div class="form-group">
                        <label for="password" className="label-name">Password</label>
                        <input type="password" className="form-control" placeholder="Enter Your Full Name" />
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