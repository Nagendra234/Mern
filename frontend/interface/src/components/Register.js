import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" class="form-control" placeholder="Enter Your Full Name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" placeholder="Enter Your Full Name" />
                    </div>
                    <div class="form-group">
                        <label for="mobileNumber">Mobile Number</label>
                        <input type="text" class="form-control" placeholder="Enter Your Full Name" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" placeholder="Enter Your Full Name" />
                    </div>
                    <div class="form-group">
                        <label for="confirmPass">Confirm Password</label>
                        <input type="password" class="form-control" placeholder="Enter Your Full Name" />
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        )
    }
}

export default Register